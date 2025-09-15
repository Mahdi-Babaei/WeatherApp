import React, { createContext, useState } from 'react'

export const CityContext = createContext()

export default function CityProvider({children}) {
    const [city , setCity] = useState('Barcelona')

  return (
    <CityContext.Provider value={{city , setCity}}>
        {children}
    </CityContext.Provider>
  )
}
