import './App.css';
import MainCity from './components/MainCity/MainCity';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';

export default function App() {
  return (
    <>
      <div className='w-screen h-screen bg-light-primary dark:bg-dark-primary dark p-10 flex gap-x-5 select-none'>
          <SidebarMenu />
          <div className='grid grid-rows-5 gap-y-5'>
              <div className='grid grid-cols-4 gap-x-5   row-span-3'>
                <div className='col-span-1'>
                    <MainCity/>
                </div>
                <div className='col-span-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente omnis maxime commodi minima nihil consectetur adipisci aut doloribus? Corporis sit commodi error placeat, illum saepe harum dolores in ab eveniet.
                </div>
              </div>
              <div className='bg-white/5 row-span-2'>
                
              </div>
          </div>
      </div>
    </>
  );
}

