import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './context/Theme';
import { CityContext } from './context/City';
import Desktop from './breakpoints/Desktop';
import Mobile from './breakpoints/Mobile';

export default function App() {
  const {theme , setTheme} = useContext(ThemeContext)
  const {city , setCity , favCities} = useContext(CityContext)

  

  return (
    <>
      <div className={`h-full 2xl:h-screen bg-light-primary dark:bg-dark-primary ${theme} p-4 2xl:p-10 flex gap-x-5 select-none dark:text-gray-100 `}>
          {/* <Mobile city={city} favCities={favCities} /> */}
          <Desktop city={city} favCities={favCities}/>
      </div>
    </>
  );
}

