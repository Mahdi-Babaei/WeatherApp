import React , {useContext} from 'react'
import useFetchData from '../../hooks/useFetchData'
import { GradeContext } from '../../context/Grade'

export default function Forecast({city}) {
    const {fetchData , isLoading} = useFetchData('forecast' , city , '6')
    const {grade} = useContext(GradeContext)
    

    const getWeekDayFunc= (date) => {
        const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dateObj = new Date(date)
        return weekDays[dateObj.getDay()]
    }

  return (
    <>
        {isLoading ? <p>Loading ...</p> : !fetchData ? null : (
            <div className='bg-light-secondary dark:bg-dark-secondary rounded-xl xl:rounded-3xl flex flex-col justify-between gap-y-3 py-5 px-4 2xl:px-8 h-full relative shadow-sm'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-NunitoBold text-3xl'>Next 7 Days</h2>
                    <span className='text-blue-400 font-NunitoSemibold text-lg cursor-pointer hover:text-blue-500 transition-all'>See All</span>
                </div>
                <div className='bg-gradient-to-t from-blue-500 via-blue-400  to-blue-300 -mx-2 2xl:-mx-5 px-2 2xl:px-5 py-3 2xl:py-5 rounded-xl 2xl:rounded-3xl text-zinc-100'>
                    {fetchData.forecast.forecastday.slice(1 , 2).map(item => {
                        return (
                            <div className='grid grid-cols-3 text-base 2xl:text-xl  font-NunitoLight items-center'>
                                <h4 className='font-NunitoSemibold text-left'>Tommorow</h4>
                                <div className="flex items-center gap-x-2 mx-auto sm:mx-0 md:mx-auto lg:mx-0">
                                    <img src={item.day.condition.icon} alt={item.day.condition.text} className='w-10 h-10'/>
                                    <h5 className='hidden sm:line-clamp-1  md:hidden lg:line-clamp-1'>{item.day.condition.text}</h5>
                                </div>
                                <h6 className='text-right'>{Math.ceil(grade === 'c' ? item.day.maxtemp_c : item.day.maxtemp_f)}° / {Math.round(grade === 'c' ? item.day.mintemp_c : item.day.mintemp_f)}°</h6>
                            </div>
                        )
                    })}
                   
                </div>
                <div className='flex flex-col justify-between gap-y-3 h-full'>
                    {fetchData.forecast.forecastday.slice(2).map(item => {
                        return (
                            <div className='grid grid-cols-3 text-base 2xl:text-xl font-NunitoLight items-center'>
                                <h4 className='font-NunitoSemibold text-left'>{getWeekDayFunc(item.date)}</h4>
                                <div className="flex items-center gap-x-2 mx-auto sm:mx-0 md:mx-auto lg:mx-0">
                                    <img src={item.day.condition.icon} alt="" className='w-10 h-10'/>
                                    <h5 className='hidden sm:line-clamp-1  md:hidden lg:line-clamp-1'>{item.day.condition.text}</h5>
                                </div>
                                <h6 className='text-right'>{Math.ceil(grade === 'c' ? item.day.maxtemp_c : item.day.maxtemp_f)}° / {Math.round(grade === 'c' ? item.day.mintemp_c : item.day.mintemp_f)}°</h6>
                            </div>
                        )
                    })}
                </div>
            </div>
        )}
    </>
  )
}
