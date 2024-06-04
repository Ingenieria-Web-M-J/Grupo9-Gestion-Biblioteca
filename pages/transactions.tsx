import { useState, useEffect } from 'react';

const Transactions = () => {
  const [libros, setLibros] = useState<any[]>([]);
  const [movimientos, setMovimientos] = useState<any[]>([]);
  const [selectedLibro, setSelectedLibro] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalTipo, setModalTipo] = useState<string>('ENTRADA');
  const [modalUnidades, setModalUnidades] = useState<number>(1);
  const [chartData, setChartData] = useState<any>({});

  useEffect(() => {
    fetchLibros();
  }, []);

  useEffect(() => {
    if (selectedLibro) {
      fetchMovimientos(selectedLibro);
      fetchChartData(selectedLibro);
    }
  }, [selectedLibro]);

  const fetchLibros = async () => {
    const res = await fetch('/api/libros');
    const data = await res.json();
    setLibros(data);
  };

  const fetchMovimientos = async (libroId: string) => {
    const res = await fetch(`/api/movimientos?libroId=${libroId}`);
    const data = await res.json();
    setMovimientos(data);
  };

  const fetchChartData = async (libroId: string) => {
    const res = await fetch(`/api/chartData?libroId=${libroId}`);
    const data = await res.json();
    setChartData(data);
  };

  const handleLibroChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const libroId = e.target.value;
    setSelectedLibro(libroId);
  };

  const handleAgregarMovimiento = async () => {
    setLoading(true);
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
    setLoading(false);
    if (res.ok) {
      fetchMovimientos(selectedLibro!);
      fetchChartData(selectedLibro!);
      setIsModalOpen(false);
    }
  };

  const handleUnidadesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setModalUnidades(value);
    } else {
      setModalUnidades(1); // Valor mínimo permitido
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Transacciones</h1>
      <div className="mb-4">
        <label htmlFor="libro" className="block mb-2">Seleccione un libro:</label>
        <select id="libro" onChange={handleLibroChange} className="p-2 border rounded w-full max-w-xs">
          <option value="">Seleccione un libro</option>
          {libros.map((libro) => (
            <option key={libro.id} value={libro.id}>{libro.nombre}</option>
          ))}
        </select>
      </div>
      <table className="w-full border-collapse border">
        <thead>
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
          <div className="bg-white p-8 rounded shadow-lg w-96">
            <h2 className="text-xl mb-4">Agregar Movimiento - {selectedLibro && libros.find(libro => libro.id === selectedLibro)?.nombre}</h2>
            <div className="mb-4">
              <label className="block mb-2">Tipo de Movimiento:</label>
              <select
                value={modalTipo}
                onChange={(e) => setModalTipo(e.target.value)}
                className="p-2 border rounded w-full"
              >
                <option value="ENTRADA">Entrada</option>
                <option value="SALIDA">Salida</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Unidades:</label>
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
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {loading ? 'Cargando...' : 'Agregar Movimiento'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;










