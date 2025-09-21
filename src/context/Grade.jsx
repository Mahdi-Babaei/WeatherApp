import React, { createContext, useEffect, useState } from 'react'

export const GradeContext = createContext()

export default function GradeProvider({children}) {
    const [grade , setGrade] = useState(localStorage.getItem('grade') ? localStorage.getItem('grade') : 'c')

    useEffect(() => {
      localStorage.setItem('grade' , grade)
    })

  return (
    <>
        <GradeContext value={{grade , setGrade}}>
            {children}
        </GradeContext>
    </>
  )
}
