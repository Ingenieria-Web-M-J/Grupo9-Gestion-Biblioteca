import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PRODUCTS } from '@/utils/queries/products';
import { GET_TRANSACTION_BY_ID } from '@/utils/queries/transactions';
import { CREATE_TRANSACTION } from '@/utils/mutations/transactions';
import {useApolloClient } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

type Book = {
  id: number;
  name: string;
  balance: number;
  creator: string;
};

type Transaction = {
  id: number;
  amount: number;
  createdAt: string;
  type: string;
  user: {
    name: string;
    id: number;
  };
  product: {
    id: number;
    title: string;
    balance: number;
  };
};

// Componente principal para manejar las transacciones de los libros
const Transactions = () => {
  const [books, setBooks] = useState<any[]>([]); // Estado para almacenar la lista de libros
  const [transactions, setTransactions] = useState<any[]>([]); // Estado para almacenar la lista de movimientos
  const [selectedLibro, setSelectedLibro] = useState<Book | null>(null); // Estado para almacenar el libro seleccionado
  const [loading, setLoading] = useState(false); // Estado para controlar la animación de carga
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la visibilidad del modal
  const [modalTipo, setModalTipo] = useState('ENTRADA'); // Estado para almacenar el tipo de movimiento en el modal
  const [modalUnidades, setModalUnidades] = useState(1); // Estado para almacenar las unidades en el modal
  const { data: session } = useSession(); // Obtener la sesión actual utilizando NextAuth
  const [createTransaction, { loading: loadingMutations }] = useMutation(CREATE_TRANSACTION);
  const client = useApolloClient();

  //Traer los libros y colocarlos para seleccionar
  const {loading: queryLoading} = useQuery(GET_PRODUCTS, {
    variables: {
      take: 10,
      skip: 0,
    },
    //Politica para obtener los datos de la cache y no estar consultando siempre al servidor
    fetchPolicy: 'cache-and-network',
    onCompleted(data) {
      console.log(data);
      setBooks(data.products);
    },
  });

  // useEffect para cargar los movimientos cuando se selecciona un libro
  useEffect(() => {
    // if (selectedLibro) {
    //   setTransactions([]);
    //   fetchTransactions(selectedLibro);
    // }
  }, [selectedLibro]);

  //Función para obtener la lista de movimientos del API para un libro específico
  const fetchTransactions = async (selectedLibro: any) => {
    console.log("selectedLibro")
    console.log(selectedLibro)
    setLoading(true);
    setTransactions([]);
    try {
      const { data } = await client.query({
        query: GET_TRANSACTION_BY_ID,
        variables: {
          where: {
            productId: {
              equals: selectedLibro
            },
          },
        },
        fetchPolicy: 'network-only' //Traer los datos siempre del servidor
      },
    );
      setLoading(false);
      console.log(data);
      setTransactions(data.transactions);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching transactions:", error);
    }
  }

  // Función para agregar una nueva transacción
  const handleAgregarMovimiento = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    //Validar si el libro seleccionado es nulo
    if  (!selectedLibro) {
      toast.error('Seleccione un libro');
      setLoading(false);
      return;
    }

    console.log(selectedLibro)
    //TODO: Falta que funcione bien
    //Validar si el libro tiene unidades suficientes para la salida
    if (modalTipo === 'SALIDA' && selectedLibro.balance < modalUnidades) {
      toast.error('El libro no tiene suficientes unidades');
      setLoading(false);
      return;
    }

    await createTransaction({
      variables: {
        data: {
          amount: modalUnidades,
          type: modalTipo,
          product: {
            connect: {
              id: selectedLibro,
            },
          },
          user: {
            connect: {
              email: session?.user?.email,
            },
          },
        },
      },
    })
      .then(async (response) => {
        toast.success('Transaction saved');
        const data = response.data.createOneTransaction;  //Obtener la respuesta del servidor
        //Agregarle el nuevo libro a la lista de libros en el estado
        console.log("data")
        console.log(data)
        setTransactions((prevTransactions) => [
          ...prevTransactions,
          {
            id: data.id,
            type: modalTipo,
            amount: modalUnidades,
            user: {
              name: data.user.name,
            },
            createdAt: new Date().toISOString(),
          },
        ]);
        setLoading(false);
        setIsModalOpen(false); // Cerrar el modal
        
      })
      .catch((error: any) => {
        toast.error('Error saving transaction');
        console.error(error);
        setLoading(false);
      });
  };

   //Función para manejar el cambio de selección del libro
  const handleLibroChange = (e: { target: { value: any; }; }) => {
    const libroId = e.target.value;
    setSelectedLibro(libroId);
    setTransactions([]);
    fetchTransactions(libroId);
  };

  

  // Función para manejar el cambio en el número de unidades en el modal
  const handleUnidadesChange = (e: { target: { value: string; }; }) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setModalUnidades(value); // Actualizar el estado con el nuevo valor
    } else {
      setModalUnidades(1); // Establecer el valor mínimo permitido
    }
  };

  if (queryLoading) return <h1>Loading...</h1>;
  return (
    <div className="bg-blue-100 min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl mb-4 text-indigo-700 font-bold">Transacciones</h1>
        <div className="mb-4">
          <label htmlFor="libro" className="block mb-2 font-semibold">Seleccione un libro:</label>
          <select id="libro" onChange={handleLibroChange} className="p-2 border rounded w-full max-w-xs">
            <option value="">Seleccione un libro</option>
            {books.map((book) => (
              <option key={book.id} value={book.id}>{book.title}</option>
            ))}
          </select>
        </div>
        <table className="w-full border-collapse border bg-white shadow-md rounded-lg">
          <thead className="bg-blue-300 text-indigo-700">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Fecha</th>
              <th className="border p-2">Unidades</th>
              <th className="border p-2">Persona</th>
              <th className="border p-2">Tipo</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="border p-2">{transaction.id}</td>
                <td className="border p-2">{new Date(transaction.createdAt).toLocaleDateString()}</td>
                <td className="border p-2">{transaction.amount}</td>
                <td className="border p-2">{transaction.user.name}</td>
                <td className="border p-2">{transaction.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Agregar Movimiento
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md sm:w-96">
              <h2 className="text-xl font-semibold mb-4 text-indigo-700">Agregar Movimiento</h2>
              <div className="mb-4">
                <label htmlFor="tipo" className="block mb-2 font-semibold">Tipo de Movimiento:</label>
                <select
                  id="tipo"
                  value={modalTipo}
                  onChange={(e) => setModalTipo(e.target.value)}
                  className="p-2 border rounded w-full"
                >
                  <option value="ENTRADA">Entrada</option>
                  <option value="SALIDA">Salida</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="unidades" className="block mb-2 font-semibold">Unidades:</label>
                <input
                  type="number"
                  value={modalUnidades}
                  onChange={handleUnidadesChange}
                  min={1}
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 mr-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleAgregarMovimiento}
                  //disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  {loading ? 'Cargando...' : 'Agregar Movimiento'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;














