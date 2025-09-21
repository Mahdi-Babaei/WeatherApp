import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './context/Theme';
import { CityContext } from './context/City';
import Desktop from './breakpoints/Desktop';
import Mobile from './breakpoints/Mobile';
import { useMediaQuery } from 'react-responsive'


export default function App() {
  const {theme , setTheme} = useContext(ThemeContext)
  const {city , setCity , favCities} = useContext(CityContext)
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)'
  })
  

  return (
    <>
      <div className={`h-full 2xl:h-screen bg-light-primary dark:bg-dark-primary ${theme} p-4 2xl:p-10 flex gap-x-5 select-none dark:text-gray-100 `}>
        {isDesktop ? <Desktop city={city} favCities={favCities}/> : <Mobile city={city} favCities={favCities}/>}
      </div>
    </>
  );
}

