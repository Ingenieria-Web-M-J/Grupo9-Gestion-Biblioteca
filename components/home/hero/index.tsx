// Importamos la función `signIn` de next-auth/react y React
import { signIn } from 'next-auth/react';
import React from 'react';

// Definimos el componente funcional Index
const Index = () => {
  return (
    <div>
      {/* Encabezado */}
      <header>
        {/* Fondo de encabezado con imagen de fondo */}
        <div
          className='w-full bg-center bg-cover h-[38rem]'
          style={{
            backgroundImage:
            `url('/biblioteca.jpg')`, // Establecemos la imagen de fondo
          }}
        >
          {/* Contenedor para centrar contenido */}
          <div className='flex items-center justify-center w-full h-full bg-gray-900/40'>
            {/* Contenido */}
            <div className='text-center'>
              {/* Título */}
              <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                Bienvenido a la  <span className='text-blue-400'>Biblioteca </span> U de A {/* Texto del título con color azul */}
              </h1>
              {/* Botón de Inicio de Sesión */}
              <button 
              onClick={() => signIn()} // Función para iniciar sesión al hacer clic en el botón
              className='w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500'>
                Inicio Sesión {/* Texto del botón */}
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Index; // Exportamos el componente Index
