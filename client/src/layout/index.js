import React from 'react';
import logo from '../assets/logo.png';

const AuthLayout = ({ children }) => {
  return (
    <>
      <header className='flex justify-center items-center py-4 shadow-lg bg-white'>
         <img
          src={logo}
          alt="logo"
          style={{ width: '180px', height: '60px' }}
          />
      </header>
      {children}
    </>
  );
};

export default AuthLayout;