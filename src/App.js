import './App.css';
import MainCity from './components/MainCity/MainCity';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';

export default function App() {
  return (
    <>
      <div className='w-screen h-screen bg-light-primary dark:bg-dark-primary dark'>
        <div className='w-[90%] h-screen p-10 flex gap-x-5 mx-auto'>
          <SidebarMenu />
          <div className='grid grid-rows-2 gap-y-5'>
              <div className='flex gap-x-5'>
                <div className='flex-1'>
                    <MainCity/>
                </div>
                <div className='flex-[3.5]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente omnis maxime commodi minima nihil consectetur adipisci aut doloribus? Corporis sit commodi error placeat, illum saepe harum dolores in ab eveniet.
                </div>
              </div>
              <div>
                
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

