import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './context/Theme';
import { CityContext } from './context/City';
import Desktop from './breakpoints/Desktop';
import Mobile from './breakpoints/Mobile';
import { useMediaQuery } from 'react-responsive'
import useFetchData from './hooks/useFetchData'
import Loading from './components/Loading/Loading';


export default function App() {
  const {theme} = useContext(ThemeContext)
  const {city , favCities} = useContext(CityContext)
  const {fetchData , isLoading} = useFetchData('current' , city)
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)'
  })
  

  return (
    <>
      <div className={`h-full 2xl:h-screen bg-light-primary dark:bg-dark-primary ${theme} p-4 2xl:p-10 flex gap-x-5 select-none dark:text-gray-100 `}>
          {isLoading ? <Loading /> : !fetchData ? <Loading /> : isDesktop ? <Desktop city={city} favCities={favCities}/> : <Mobile city={city} favCities={favCities}/>}
      </div>
    </>
  );
}

