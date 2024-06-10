import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { signIn, useSession, signOut } from 'next-auth/react';

const Sidebar: React.FC = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  if (!session) {
    return null; // No mostrar el sidebar si el usuario no está autenticado
  }

  return (
    <div>
      <button
        type="button"
        className="fixed top-0 left-0 p-4 z-20 text-black hover:text-gray-200 focus:outline-none lg:hidden"
        aria-label="toggle menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 8h16M4 16h16'}
          />
        </svg>
      </button>

      <div
        className={`fixed top-0 left-0 h-full bg-blue-100 shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:shadow-none z-10 lg:w-4/5`}
      >
        <div className="flex items-center justify-between p-4 bg-blue-300">
          <Link href="/">
            <img className="w-auto h-24 sm:h-28" src="/logo.png" alt="Logo Biblioteca" />
          </Link>
        </div>
        <nav className="mt-10">
          <Link href="/" className="block px-4 py-2 text-indigo-700 capitalize hover:bg-blue-300">
            Inicio
          </Link>
            <Link href="/admin" className="block px-4 py-2 text-indigo-700 capitalize hover:bg-blue-300">
              Administrador
            </Link>
          <Link href="/books" className="block px-4 py-2 text-indigo-700 capitalize hover:bg-blue-300">
            Libros
          </Link>
          <Link href="/transactions" className="block px-4 py-2 text-indigo-700 capitalize hover:bg-blue-300">
            Transacciones
          </Link>
          <div className="block px-4 py-2 text-indigo-700 capitalize hover:bg-blue-300">
            {session && session.user ? (
              <div>
                <img
                  src={session.user.image!}
                  alt={session.user.name ?? ""}
                  className="w-20 h-20 rounded-full mb-2"
                />
                <p className="text-indigo-700">
                  {session.user.name} - {session.user.email}
                </p>
                <button
                  onClick={() => signOut()}
                  className="block mt-2 text-indigo-700 capitalize hover:bg-blue-300"
                >
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                className="block text-indigo-700 capitalize hover:bg-blue-300"
              >
                Inicio Sesión
              </button>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;








