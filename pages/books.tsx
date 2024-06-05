import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

// Componente principal para manejar la lista de libros
const Books: React.FC = () => {
  const { data: session } = useSession(); // Obtener la sesión actual utilizando NextAuth
  const [Books, setBooks] = useState<any[]>([]); // Estado para almacenar la lista de libros
  const [showDialog, setShowDialog] = useState(false); // Estado para controlar la visibilidad del cuadro de diálogo de agregar libro
  const [name, setName] = useState(''); // Estado para almacenar el nombre del nuevo libro
  const [balance, setBalance] = useState<number>(0); // Estado para almacenar el saldo inicial del nuevo libro
  const [loading, setLoading] = useState(false); // Estado para controlar la animación de carga

  // useEffect para cargar la lista de libros cuando el componente se monta
  useEffect(() => {
    fetchBooks();
  }, []);

  // Función para obtener la lista de libros del API
  const fetchBooks = async () => {
    const res = await fetch('/api/Books');
    const data = await res.json();
    setBooks(data);
  };

  // Función para manejar la adición de un nuevo libro
  const handleAddMaestro = async () => {
    setLoading(true);
    const res = await fetch('/api/Books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        balance,
      }),
    });
    setLoading(false);
    if (res.ok) {
      setShowDialog(false); // Cerrar el cuadro de diálogo
      fetchBooks(); // Recargar la lista de libros
    }
  };

  // Función para manejar el cambio del saldo inicial
  const handleBalanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setBalance(value); // Actualizar el estado con el nuevo valor
    } else {
      setBalance(0); // Establecer el saldo en 0 si el valor no es válido
    }
  };

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
            {Books.map((book) => (
              <tr key={book.id}>
                <td className="border p-2">{book.id}</td>
                <td className="border p-2">{book.name}</td>
                <td className="border p-2">{book.balance}</td>
                <td className="border p-2">{book.creatorId}</td>
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
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {loading ? 'Cargando...' : 'Agregar'}
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


