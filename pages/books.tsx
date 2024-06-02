import React, { useState, useEffect } from 'react';
import SideBar from '@/components/admin/sidebar';
import { useSession } from 'next-auth/react';

const Books = () => {
  const { data: session } = useSession();
  const [books, setBooks] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [name, setName] = useState('');
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await fetch('/api/books');
    const data = await res.json();
    setBooks(data);
  };

  const handleAddBook = async () => {
    setLoading(true);
    const res = await fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        balance,
        //creatorId: session.user.id,
      }),
    });
    setLoading(false);
    if (res.ok) {
      setShowDialog(false);
      fetchBooks();
    }
  };

  return (
    <div className="flex">
      {/* <SideBar user={session.user} /> */}
      <div className="flex-1 p-6 ml-64">
        <h1 className="text-2xl mb-4">Libros</h1>
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Nombre</th>
              <th className="border p-2">Saldo</th>
              <th className="border p-2">Creador ID</th>
            </tr>
          </thead>
          <tbody>
            {/*  {books.map((book) => (
              <tr key={book.id}>
                <td className="border p-2">{book.id}</td>
                <td className="border p-2">{book.name}</td>
                <td className="border p-2">{book.balance}</td>
                <td className="border p-2">{book.creatorId}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
        <button
          onClick={() => setShowDialog(true)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Agregar libro
        </button>
        {showDialog && (
          <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-75">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Agregar libro</h2>
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
                  Saldo:
                </label>
                <input
                  type="number"
                  id="balance"
                  value={balance}
                  onChange={(e) => setBalance(parseInt(e.target.value))}
                  className="w-full p-2 border rounded"
                />
              </div>
              <button
                onClick={handleAddBook}
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {loading ? 'Loading...' : 'Add'}
              </button>
              <button
                onClick={() => setShowDialog(false)}
                className="ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
