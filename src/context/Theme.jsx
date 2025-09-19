import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export default function ThemeProvider({children}) {
    const [theme , setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

    useEffect(() => {
      localStorage.setItem('theme' , theme)
    })

  return (
    <>
        <ThemeContext value={{theme , setTheme}}>
            {children}
        </ThemeContext>
    </>
  )
}
