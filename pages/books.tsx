import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

const Maestros = () => {
  const { data: session } = useSession();
  const [maestros, setMaestros] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [name, setName] = useState('');
  const [balance, setBalance] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMaestros();
  }, []);

  const fetchMaestros = async () => {
    const res = await fetch('/api/maestros');
    const data = await res.json();
    setMaestros(data);
  };

  const handleAddMaestro = async () => {
    setLoading(true);
    const res = await fetch('/api/maestros', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        balance,
        //creatorId: session?.user?.id,
      }),
    });
    setLoading(false);
    if (res.ok) {
      setShowDialog(false);
      fetchMaestros();
    }
  };

  const handleBalanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setBalance(value);
    } else {
      setBalance(0);
    }
  };

  return (
    <div className="flex">
      {/* <SideBar user={session?.user} /> */}
      <div className="flex-1 p-6 ml-64">
        <h1 className="text-2xl mb-4">Maestros</h1>
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Nombre</th>
              <th className="border p-2">Saldo</th>
              <th className="border p-2">Creador</th>
            </tr>
          </thead>
          {/*<tbody>
            {maestros.map((maestro) => (
              <tr key={maestro.id}>
                <td className="border p-2">{maestro.id}</td>
                <td className="border p-2">{maestro.name}</td>
                <td className="border p-2">{maestro.balance}</td>
                <td className="border p-2">{maestro.creatorId}</td>
              </tr>
            ))}
          </tbody>*/
          }	
        </table>
        <button
          onClick={() => setShowDialog(true)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Agregar Maestro
        </button>
        {showDialog && (
          <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-75">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Agregar Maestro</h2>
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

export default Maestros;

