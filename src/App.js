import { useContext } from 'react';
import './App.css';
import MainCity from './components/MainCity/MainCity';
import SearchBox from './components/SearchBox/SearchBox';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';
import Theme from './components/Theme/Theme';
import { ThemeContext } from './context/Theme';

export default function App() {
  const {theme , setTheme} = useContext(ThemeContext)

  return (
    <>
      <div className={`w-screen h-screen bg-light-primary dark:bg-dark-primary ${theme} p-10 flex gap-x-5 select-none`}>
          <SidebarMenu />
          <div className='grid grid-rows-5 gap-y-5'>
              <div className='grid grid-cols-4 gap-x-5   row-span-3'>
                <div className='col-span-1'>
                    <MainCity/>
                </div>
                <div className='col-span-3 flex flex-col gap-y-5'>
                    <div className='grid grid-cols-5 gap-x-8 items-center'>
                      <div className='col-span-2'>
                        <SearchBox />
                      </div>
                      <div className='col-span-3 flex items-center gap-x-8'>
                        <Theme />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quo consectetur, deserunt qui iusto est aperiam doloremque provident facere beatae impedit? Accusamus eligendi harum neque corporis voluptate rerum libero saepe!</div>
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

