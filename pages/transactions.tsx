import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_TRANSACTION_BY_ID } from '@/utils/queries/transactions';


// Componente principal para manejar las transacciones de los libros
const Transactions = () => {
  const [books, setBooks] = useState<any[]>([]); // Estado para almacenar la lista de libros
  const [movimientos, setTransactions] = useState([]); // Estado para almacenar la lista de movimientos
  const [selectedLibro, setSelectedLibro] = useState(null); // Estado para almacenar el libro seleccionado
  const [loading, setLoading] = useState(false); // Estado para controlar la animación de carga
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la visibilidad del modal
  const [modalTipo, setModalTipo] = useState('ENTRADA'); // Estado para almacenar el tipo de movimiento en el modal
  const [modalUnidades, setModalUnidades] = useState(1); // Estado para almacenar las unidades en el modal



  // useEffect para cargar los movimientos cuando se selecciona un libro
  useEffect(() => {
    if (selectedLibro) {
      //fetchMovimientos(selectedLibro);
    }
  }, [selectedLibro]);

  

  //Función para obtener la lista de movimientos del API para un libro específico
  // const fetchMovimientos 
  //   const {loading} = useQuery(GET_TRANSACTION_BY_ID, {
  //     variables: {
  //       take: 10,
  //       skip: 0,
  //       where: {
  //         product: {
  //           id: bookId,
  //         },
  //       },
  //     },
  //     fetchPolicy: 'cache-and-network',
  //     onCompleted(data) {
  //       console.log(data);
  //       setTransactions(data.transactions);
  //     },
  //   });
  // };

   //Función para manejar el cambio de selección del libro
   const handleLibroChange = (e: { target: { value: any; }; }) => {
     const libroId = e.target.value;
     setSelectedLibro(libroId);
   };

  // Función para manejar la adición de un nuevo movimiento
  const handleAgregarMovimiento = async () => {
    //setLoading(true);
    const res = await fetch('/api/movimientos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        libroId: selectedLibro,
        tipo: modalTipo,
        unidades: modalUnidades,
        usuarioId: '1234', // Identificador ficticio del usuario
      }),
    });
    //setLoading(false);
    if (res.ok) {
      setMovimientos([]); // Recargar la lista de movimientos
      setIsModalOpen(false); // Cerrar el modal
    }
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

  return (
    <div className="bg-blue-100 min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl mb-4 text-indigo-700 font-bold">Transacciones</h1>
        <div className="mb-4">
          <label htmlFor="libro" className="block mb-2 font-semibold">Seleccione un libro:</label>
          <select id="libro" onChange={handleLibroChange} className="p-2 border rounded w-full max-w-xs">
            <option value="">Seleccione un libro</option>
            {books.map((book) => (
              <option key={book.id} value={book.id}>{book.nombre}</option>
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
            {movimientos.map((mov) => (
              <tr key={mov.id}>
                <td className="border p-2">{mov.id}</td>
                <td className="border p-2">{new Date(mov.fecha).toLocaleDateString()}</td>
                <td className="border p-2">{mov.unidades}</td>
                <td className="border p-2">{mov.usuarioId}</td>
                <td className="border p-2">{mov.tipo}</td>
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














