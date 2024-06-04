import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { User } from '@/types'; // Asegúrate de importar el tipo User desde donde corresponda

const Usuarios: React.FC = () => {
  const { data: session } = useSession();
  const [usuarios, setUsuarios] = useState<User[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedRole, setSelectedRole] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    const res = await fetch('/api/usuarios');
    const data: User[] = await res.json();
    setUsuarios(data);
  };

  const handleEditUser = (user: User | null) => {
    setSelectedUser(user);
    setShowDialog(true);
  };

  const handleUpdateUser = async () => {
    setLoading(true);
    /*const res = await fetch(`/api/usuarios/${selectedUser?.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        role: selectedRole,
      }),
    };
    setLoading(false);
    /*if (res.ok) {
      setShowDialog(false);
      fetchUsuarios();
    }*/
  };

  return (
    <div className="flex">
      <div className="flex-1 p-6 ml-64">
        <h1 className="text-2xl mb-4">Usuarios</h1>
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Fecha de Creación</th>
              <th className="border p-2">Correo</th>
              <th className="border p-2">Rol</th>
              <th className="border p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user) => (
              <tr key={user.id}>
                <td className="border p-2">{user.id}</td>
                <td className="border p-2">{new Date(user.createdAt).toLocaleDateString()}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.role}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleEditUser(user)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Editar usuario
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showDialog && (
          <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-75">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Editar Usuario</h2>
              <div className="mb-4">
                <p>Correo: {selectedUser?.email}</p>
              </div>
              <div className="mb-4">
                <label htmlFor="role" className="block mb-2">
                  Rol:
                </label>
                <select
                  id="role"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                  {/* Agrega otros roles según sea necesario */}
                </select>
              </div>
              <button
                onClick={handleUpdateUser}
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {loading ? 'Cargando...' : 'Actualizar'}
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

export default Usuarios;


