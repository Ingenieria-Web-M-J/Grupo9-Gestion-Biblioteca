import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PRODUCTS } from '@/utils/queries/products';
import { productsUpsertTrasnformations } from '@/utils/transformations/products';
import { toast } from 'react-toastify';
import { CREATE_PRODUCT } from '@/utils/mutations/products';

// Componente principal para manejar la lista de libros
const Books: React.FC = () => {
  const { data: session } = useSession(); // Obtener la sesión actual utilizando NextAuth
  const [books, setBooks] = useState<any[]>([]); // Estado para almacenar la lista de libros
  const [showDialog, setShowDialog] = useState(false); // Estado para controlar la visibilidad del cuadro de diálogo de agregar libro
  const [name, setName] = useState(''); // Estado para almacenar el nombre del nuevo libro
  const [balance, setBalance] = useState<number>(0); // Estado para almacenar el saldo inicial del nuevo libro
  const [createProduct, { loading: loadingMutations }] = useMutation(CREATE_PRODUCT);
  const [loading, setLoading] = useState(false);
  
  //Traer productos
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


  

  // Función para manejar la adición de un nuevo libro
  const handleAddMaestro = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    
    const { dataCreate } = productsUpsertTrasnformations({
      name,
      balance,
      creator: session?.user?.email,
    });
    console.log(dataCreate)
    await createProduct({
      variables: {
        data: dataCreate
      },
    })
      .then(async (response) => {
        toast.success('Product saved');
        const data = response.data.createOneProduct;  //Obtener la respuesta del servidor
        //Agregarle el nuevo libro a la lista de libros en el estado
        console.log("data")
        console.log(data)
        setBooks((prevBooks) => [
          ...prevBooks,
          {
            id: data.id,
            title: name,
            balance,
            creator: {
              name: data.creator.name,
            },
          },
        ]);
      })
      .catch((error: any) => {
        toast.error('Error saving product');
        console.error(error);
      });
      
  };
  

  // Función para manejar el cambio del saldo inicial
  const handleBalanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setBalance(value); // Actualizar el estado con el nuevo valor del saldo
    } else {
      setBalance(0); // Establecer el saldo en 0 si el valor no es válido
    }
  };

  if (queryLoading) return <h1>Loading...</h1>;
  return (
    <div className="flex bg-blue-100 min-h-screen">
      <div className="flex-1 p-6">
        {/* <SideBar user={session?.user} /> */}
        <h1 className="text-2xl mb-4 text-indigo-700 font-bold">Books</h1>
        <table className="w-full border-collapse border bg-white shadow-md rounded-lg">
          <thead className="bg-blue-300 text-indigo-700">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Nombre</th>
              <th className="border p-2">Saldo</th>
              <th className="border p-2">Creador</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td className="border p-2">{book.id}</td>
                <td className="border p-2">{book.title}</td>
                <td className="border p-2">{book.balance}</td>
                <td className="border p-2">{book.creator.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={() => setShowDialog(true)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Agregar Libro
        </button>
        {showDialog && (
          <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-75">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-indigo-700">Agregar Libro</h2>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Nombre:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="balance" className="block mb-2">
                  Saldo Inicial:
                </label>
                <input
                  type="number"
                  id="balance"
                  value={balance}
                  onChange={handleBalanceChange}
                  min={0}
                  className="w-full p-2 border rounded"
                />
              </div>
              <button
                onClick={handleAddMaestro}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >

                {loadingMutations ? 'Cargando...' : 'Agregar'}
              </button>
              <button
                onClick={() => setShowDialog(false)}
                className="ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;



