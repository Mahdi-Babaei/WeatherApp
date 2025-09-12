import './App.css';
import MainCity from './components/MainCity/MainCity';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';

export default function App() {
  return (
    <>
      <div className='w-screen h-screen bg-light-primary dark:bg-dark-primary p-10 flex gap-x-5 dark'>
          <SidebarMenu />
          <div className='grid grid-rows-2 gap-5'>
              <div className='flex gap-x-5'>
                <MainCity />
              </div>
              <div>
                
              </div>
          </div>
      </div>
    </>
  );
}

