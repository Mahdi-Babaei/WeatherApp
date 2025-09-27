import React, { createContext, useState , useEffect } from 'react'

export const CityContext = createContext()

export default function CityProvider({children}) {
    const [city , setCity] = useState(localStorage.getItem('city') ? localStorage.getItem('city') : 'tehran')
    const [favCities , setFavCities] = useState(localStorage.getItem('favCities') ? localStorage.getItem('favCities').split(',') : ['zanjan'])

    useEffect(() => {
      localStorage.setItem('city' , city)
      localStorage.setItem('favCities' , favCities)
    })

  return (
    <CityContext.Provider value={{city , setCity , favCities , setFavCities}}>
        {children}
    </CityContext.Provider>
  )
}
