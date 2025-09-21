import React , {useContext} from 'react'
import useFetchData from '../../hooks/useFetchData';
import { GradeContext } from '../../context/Grade';

export default function OtherCity({city}) {
    const {fetchData , isLoading} = useFetchData('current' , city)
    const {grade , setGrade} = useContext(GradeContext)


  return (
    <>
      {isLoading ? <p>Loading...</p> : !fetchData ? null : (
        <div className='grid grid-cols-3 items-center  bg-light-secondary dark:bg-dark-secondary rounded-xl xl:rounded-3xl px-2 2xl:px-5 shadow-sm h-20 md:h-auto'>
            <img src={fetchData.current.condition.icon} className='w-20 h-20 md:w-24 md:h-24 xl:h-20 xl:w-20'/>
            <div className='text-center md:text-left lg:text-center xl:text-left'>
                <h3 className='font-NunitoRegular text-xl line-clamp-2'>{fetchData.location.name}</h3>
                <span className='font-NunitoLight tracking-wide'>{fetchData.current.condition.text}</span>
            </div>
            <h2 className='text-6xl md:text-7xl xl:text-6xl 2xl:text-7xl font-NunitoBold text-right'>{Math.round(grade === 'c' ? fetchData.current.temp_c : fetchData.current.temp_f)}°</h2>
        </div>
      )}
    </>
  )
}
