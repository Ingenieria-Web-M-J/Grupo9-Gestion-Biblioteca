import { signIn } from 'next-auth/react';
import React from 'react';

const Index = () => {
  return (
    <div>
      <header>
        <div
          className='w-full bg-center bg-cover h-[38rem]'
          style={{
            backgroundImage:
            `url('/biblioteca.jpg')`,
          }}
        >
          <div className='flex items-center justify-center w-full h-full bg-gray-900/40'>
            <div className='text-center'>
              <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                Bienvenido a la  <span className='text-blue-400'>Biblioteca </span> U de A
              </h1>
              <button 
              onClick={() => signIn()}
              className='w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500'>
                Inicio Sesión
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Index;