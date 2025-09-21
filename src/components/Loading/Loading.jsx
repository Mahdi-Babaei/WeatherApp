import React from 'react'
import './Loading.css'
export default function Loading() {
  return (
    <>
        <div className='spinner absolute top-1/2 left-1/2 -translate-1/2'>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </>
  )
}
