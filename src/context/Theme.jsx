import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

export default function ThemeProvider({children}) {
    const [theme , setTheme] = useState('dark')

  return (
    <>
        <ThemeContext value={{theme , setTheme}}>
            {children}
        </ThemeContext>
    </>
  )
}
