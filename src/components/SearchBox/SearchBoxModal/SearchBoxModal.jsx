import React from 'react'

export default function SearchBoxModal({fetchData , setCity , setIsSearchModalOpen}) {
  return (
    <>
        <div className='rounded-2xl bg-dark-secondary mt-2 p-2 absolute z-10 text-xl font-NunitoSemibold w-full flex flex-col gap-y-1 border '>
            {fetchData && !fetchData['error'] ? fetchData.map(item => {
                return (
                    <div className='rounded-xl p-4 cursor-pointer hover:bg-dark-primary' onClick={() => {
                        setCity(item.name)
                        setIsSearchModalOpen(false)
                    }}>
                        {item.country}, {item.name}
                    </div>
                )
            }) : <p>Search Something</p>}
        </div>
    </>
  )
}
