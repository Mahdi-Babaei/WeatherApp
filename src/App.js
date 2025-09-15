import { useContext } from 'react';
import './App.css';
import MainCity from './components/MainCity/MainCity';
import SearchBox from './components/SearchBox/SearchBox';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';
import Theme from './components/Theme/Theme';
import { ThemeContext } from './context/Theme';
import { CityContext } from './context/City';
import Notifications from './components/Notifications/Notifications';
import User from './components/User/User';
import Forecast from './components/Forecast/Forecast';
import OtherCity from './components/OtherCity/OtherCity';
import AddCity from './components/AddCity/AddCity';
import Overview from './components/Overview/Overview';

export default function App() {
  const {theme , setTheme} = useContext(ThemeContext)
  const {city , setCity} = useContext(CityContext)

  return (
    <>
      <div className={`h-screen bg-light-primary dark:bg-dark-primary ${theme} p-10 flex gap-x-5 select-none dark:text-gray-100 `}>
          <SidebarMenu />
          <div className='flex flex-col gap-y-5 w-full'>
              <div className='grid grid-cols-4 gap-x-5'>
                <div className='col-span-1'>
                    <MainCity city={city}/>
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
                    <div className='grid grid-cols-2 gap-5 w-full h-full'>
                        <Forecast city={city}/>
                        <div className='bg-dark-secondary w-full h-full rounded-3xl'></div>
                    </div>
                </div>
              </div>
              <div className='grid grid-cols-4 gap-x-5 h-full'>
                  <div className='col-span-1 grid grid-rows-3 gap-y-5'>
                      <OtherCity city='Ardabil'/>
                      <OtherCity city='Mashhad'/>
                      <AddCity />
                  </div>
                  <div className='col-span-3'>
                      <Overview />
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

