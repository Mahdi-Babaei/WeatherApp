import React, { createContext, useState } from 'react'

export const CityContext = createContext()

export default function CityProvider({children}) {
    const [city , setCity] = useState('zanjan')
    const [favCities , setFavCities] = useState(['tehran'])

  return (
    <CityContext.Provider value={{city , setCity , favCities , setFavCities}}>
        {children}
    </CityContext.Provider>
  )
}
