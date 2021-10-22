import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';
import Switch from '@mui/material/Switch';

export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-3xl font-bold text-black py-1 px-2 rounded dark:text-white">
            Moggle🧐
          </p>
        </Link>
        <div>
          <Switch onChange={() => setDarkTheme(!darkTheme)} label="Label" />
          {darkTheme ? (
            <span className="font-bold">💡</span>
          ) : (
            <span className="font-bold">🌙</span>
          )}
        </div>
      </div>
      <Search />
    </div>
  );
};
