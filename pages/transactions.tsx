// Importamos las librerías y componentes necesarios
import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PRODUCTS } from '@/utils/queries/products';
import { GET_TRANSACTION_BY_ID } from '@/utils/queries/transactions';
import { CREATE_TRANSACTION } from '@/utils/mutations/transactions';
import { useApolloClient } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Definimos los tipos de datos para Libro (Book) y Transacción (Transaction)
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

const Transactions = () => {
  // Definimos los estados del componente
  const [books, setBooks] = useState<any[]>([]);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [selectedLibro, setSelectedLibro] = useState<Book | null>(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTipo, setModalTipo] = useState('ENTRADA');
  const [modalUnidades, setModalUnidades] = useState(1);

  // Obtenemos la sesión del usuario
  const { data: session } = useSession();

  // Definimos la mutación para crear una transacción
  const [createTransaction, { loading: loadingMutations }] = useMutation(CREATE_TRANSACTION);

  // Obtenemos el cliente de Apollo
  const client = useApolloClient();

  // Definimos la consulta para obtener los productos
  const { loading: queryLoading } = useQuery(GET_PRODUCTS, {
    variables: { take: 10, skip: 0 },
    fetchPolicy: 'cache-and-network',
    onCompleted(data) {
      setBooks(data.products);
    },
  });

  // Efecto para actualizar las transacciones cuando se selecciona un libro
  useEffect(() => {
    if (selectedLibro) {
      fetchTransactions(selectedLibro);
    }
  }, [selectedLibro]);

  // Función para obtener las transacciones de un libro
  const fetchTransactions = async (selectedLibro: any) => {
    setLoading(true);
    setTransactions([]);
    try {
      const { data } = await client.query({
        query: GET_TRANSACTION_BY_ID,
        variables: { where: { productId: { equals: selectedLibro } } },
        fetchPolicy: 'network-only',
      });
      setLoading(false);
      setTransactions(data.transactions);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching transactions:", error);
    }
  };

  // Función para manejar la adición de un movimiento
  const handleAgregarMovimiento = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    if (!selectedLibro) {
      toast.error('Seleccione un libro');
      setLoading(false);
      return;
    }
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
          product: { connect: { id: selectedLibro } },
          user: { connect: { email: session?.user?.email } },
        },
      },
    })
      .then(async (response) => {
        toast.success('Transaction saved');
        const data = response.data.createOneTransaction;
        setTransactions((prevTransactions) => [
          ...prevTransactions,
          {
            id: data.id,
            type: modalTipo,
            amount: modalUnidades,
            user: { name: data.user.name },
            createdAt: new Date().toISOString(),
          },
        ]);
        setLoading(false);
        setIsModalOpen(false);
      })
      .catch((error: any) => {
        toast.error('Error saving transaction');
        console.error(error);
        setLoading(false);
      });
  };

  // Manejadores para cambios en el libro seleccionado y en las unidades del modal
  const handleLibroChange = (e: { target: { value: any; }; }) => {
    const libroId = e.target.value;
    setSelectedLibro(libroId);
    setTransactions([]);
    fetchTransactions(libroId);
  };

  const handleUnidadesChange = (e: { target: { value: string; }; }) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setModalUnidades(value);
    } else {
      setModalUnidades(1);
    }
  };

  // Muestra un mensaje de carga mientras se obtienen los productos
  if (queryLoading) return <h1>Loading...</h1>;

  // Función para calcular los saldos diarios a partir de las transacciones
  const calculateDailyBalances = () => {
    const dailyBalances = transactions.reduce((acc, transaction) => {
      const date = new Date(transaction.createdAt).toLocaleDateString();
      if (!acc[date]) {
        acc[date] = { date, balance: 0 };
      }
      if (transaction.type === 'ENTRADA') {
        acc[date].balance += transaction.amount;
      } else {
        acc[date].balance -= transaction.amount;
      }
      return acc;
    }, {});
    return Object.values(dailyBalances);
  };

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
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  {loading ? 'Cargando...' : 'Agregar Movimiento'}
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="mt-8">
          <h2 className="text-xl mb-4 text-indigo-700 font-bold">Evolución de Saldos Diarios</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={calculateDailyBalances()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="balance" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Transactions;















