import { useContext } from 'react';
import './App.css';
import MainCity from './components/MainCity/MainCity';
import SearchBox from './components/SearchBox/SearchBox';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';
import Theme from './components/Theme/Theme';
import { ThemeContext } from './context/Theme';
import Notifications from './components/Notifications/Notifications';
import User from './components/User/User';

export default function App() {
  const {theme , setTheme} = useContext(ThemeContext)

  return (
    <>
      <div className={`h-screen w-full bg-light-primary dark:bg-dark-primary ${theme} p-10 flex gap-x-5 select-none dark:text-gray-100`}>
          <SidebarMenu />
          <div className='grid grid-rows-5 gap-y-5 w-full'>
              <div className='grid grid-cols-4 gap-x-5   row-span-3'>
                <div className='col-span-1'>
                    <MainCity/>
                </div>
                <div className='col-span-3 flex flex-col gap-y-5'>
                    <div className='grid grid-cols-5 gap-x-8 items-center'>
                      <div className='col-span-2'>
                        <SearchBox />
                      </div>
                      <div className='flex items-center justify-end gap-x-8 col-span-3'>
                        <Theme />
                        <Notifications />
                        <User />
                      </div>
                    </div>
                </div>
              </div>
              <div className='bg-white/5 row-span-2'>
                
              </div>
          </div>
      </div>
    </>
  );
}

