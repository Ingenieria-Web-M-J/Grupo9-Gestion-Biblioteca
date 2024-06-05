import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

// Definición del tipo User para tipar los datos del usuario
type User = {
  id: number;
  createdAt: string;
  email: string;
  role: string;
};

const Usuarios: React.FC = () => {
  // Obtener la sesión actual utilizando NextAuth
  const { data: session } = useSession();
  
  // Estado para almacenar la lista de usuarios
  const [usuarios, setUsuarios] = useState<User[]>([]);
  
  // Estado para controlar la visibilidad del diálogo de edición
  const [showDialog, setShowDialog] = useState(false);
  
  // Estado para almacenar el usuario seleccionado para edición
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  
  // Estado para almacenar el rol seleccionado en el diálogo de edición
  const [selectedRole, setSelectedRole] = useState('');
  
  // Estado para controlar la animación de carga
  const [loading, setLoading] = useState(false);

  // useEffect para cargar la lista de usuarios cuando el componente se monta
  useEffect(() => {
    fetchUsuarios();
  }, []);

  // Función para obtener la lista de usuarios del API
  const fetchUsuarios = async () => {
    const res = await fetch('/api/usuarios');
    const data: User[] = await res.json();
    setUsuarios(data);
  };

  // Función para manejar la edición de un usuario
  const handleEditUser = (user: User | null) => {
    setSelectedUser(user);
    setSelectedRole(user?.role || '');
    setShowDialog(true);
  };

  // Función para actualizar el usuario en el API
  const handleUpdateUser = async () => {
    setLoading(true);
    // Lógica para actualizar el usuario aquí
    setLoading(false);
    setShowDialog(false);
    fetchUsuarios();
  };

  return (
    <div className="flex flex-col items-center bg-blue-100 min-h-screen p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-3/4 xl:w-2/3">
        <h1 className="text-3xl font-bold mb-4 text-indigo-700">Usuarios</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left text-indigo-600 font-semibold">ID</th>
                <th className="border px-4 py-2 text-left text-indigo-600 font-semibold">Fecha de Creación</th>
                <th className="border px-4 py-2 text-left text-indigo-600 font-semibold">Correo</th>
                <th className="border px-4 py-2 text-left text-indigo-600 font-semibold">Rol</th>
                <th className="border px-4 py-2 text-left text-indigo-600 font-semibold">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{user.id}</td>
                  <td className="border px-4 py-2">{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.role}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleEditUser(user)}
                      className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-200"
                    >
                      Editar usuario
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showDialog && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-xl font-semibold mb-4 text-indigo-700">Editar Usuario</h2>
              <div className="mb-4">
                <p className="text-gray-700">Correo: {selectedUser?.email}</p>
              </div>
              <div className="mb-4">
                <label htmlFor="role" className="block mb-2 text-gray-700">
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
              <div className="flex justify-end">
                <button
                  onClick={handleUpdateUser}
                  disabled={loading}
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-200 mr-2"
                >
                  {loading ? 'Cargando...' : 'Actualizar'}
                </button>
                <button
                  onClick={() => setShowDialog(false)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Usuarios;





