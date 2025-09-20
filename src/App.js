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
import MoreInfo from './components/MoreInfo/MoreInfo';
import Desktop from './breakpoints/Desktop';
import Mobile from './breakpoints/Mobile';

export default function App() {
  const {theme , setTheme} = useContext(ThemeContext)
  const {city , setCity , favCities} = useContext(CityContext)

  

  return (
    <>
      <div className={`h-full 2xl:h-screen bg-light-primary dark:bg-dark-primary ${theme} p-4 2xl:p-10 flex gap-x-5 select-none dark:text-gray-100 `}>
          {/* <Desktop city={city} favCities={favCities}/> */}
          <Mobile city={city} favCities={favCities} />
      </div>
    </>
  );
}

