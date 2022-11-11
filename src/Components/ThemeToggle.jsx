import React, { useContext } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className='p-2'>
      {theme === 'dark' ? (
        <div className='flex items-center justify-center p-1 rounded-full cursor-pointer bg-secondary ' onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <HiSun className='text-2xl text-primary' />
        </div>
      ) : (
        <div className='flex items-center justify-center p-1 rounded-full cursor-pointer bg-secondary' onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <HiMoon className='text-2xl text-primary' /> 
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;