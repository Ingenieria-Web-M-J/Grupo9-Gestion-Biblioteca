import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USERS } from '@/utils/queries/users';
import { UPDATE_USER } from '@/utils/mutations/users';
import { toast } from 'react-toastify';
import { Varela_Round } from 'next/font/google';

type User = {
  id: number;
  createdAt: string;
  email: string;
  role: string;
};

const Usuarios: React.FC = () => {
  const { data: session } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedRole, setSelectedRole] = useState('');
  const [loading, setLoading] = useState(false);
  const [updateUser, { loading: loadingMutations }] = useMutation(UPDATE_USER);

  const { loading: queryLoading } = useQuery(GET_USERS, {
    variables: {
      take: 10,
      skip: 0,
    },
    fetchPolicy: 'network-only',
    onCompleted(data) {
      setUsers(data.users);
    },
  });

  // Función para manejar la adición de un nuevo libro
  const handleUpdateUser = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    await updateUser({
      variables: {
        data: {
          role: {
            set: selectedRole
          }
        },
        where: {
          id: selectedUser?.id,
        }
      },
    })
      .then(async (response) => {
        setLoading(false);
        setShowDialog(false);
        toast.success('Product saved');
        const data = response.data.updateOneUser;  //Obtener la respuesta del servidor
        //Agregarle el nuevo libro a la lista de libros en el estado
        console.log("data")
        console.log(data)
        
        // Actualizar la lista de usuarios
        setUsers((prevUsers) =>
          prevUsers.map((u) =>
            u.id === selectedUser?.id ? { ...u, role: selectedRole } : u
          )
        );
        
      })
      .catch((error: any) => {
        toast.error('Error saving product');
        setLoading(false);
        console.error(error);
      });
      
  };

  const handleEditUser = (user: User | null) => {
    setSelectedUser(user);
    setSelectedRole(user?.role || '');
    setShowDialog(true);
  };

  if (queryLoading) return <h1>Loading...</h1>;
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
              {users.map((user) => (
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
                  className="block w-full p-2 border border-gray-300 rounded"
                >
                  <option value="USER">Usuario</option>
                  <option value="ADMIN">Administrador</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowDialog(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition duration-200 mr-2"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleUpdateUser}
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-200"
                  disabled={loading}
                >
                  {loading ? 'Guardando...' : 'Guardar'}
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







