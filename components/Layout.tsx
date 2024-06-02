import React from 'react';
import Sidebar from './Sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <main className="flex-1 p-8 lg:ml-64 lg:w-4/5">
        {children}
      </main>
    </div>
  );
};

export default Layout;


