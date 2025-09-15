import React, { useEffect , useContext } from 'react'
import useFetchData from '../../../hooks/useFetchData'
import { CityContext } from '../../../context/City'


export default function ChartData({setChartData}) {
    const {city , setCity} = useContext(CityContext)
    const {fetchData , isLoading} = useFetchData('forecast' , city , '7')
    
    let data = [{day: '' , temp: 10 , hum: 30 , rain: 20}]

     const getWeekDayFunc= (date) => {
        const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const dateObj = new Date(date)
        return weekDays[dateObj.getDay()]
    }

    useEffect(() => {
        data = []
        !isLoading && fetchData && fetchData.forecast.forecastday.map(item => {
            console.log(item)
            let newWeekDay = {
                day: getWeekDayFunc(item.date) ,
                temp: Math.round(item.day.avgtemp_c),
                hum: Math.round(item.day.avghumidity) ,
                rain: Math.round(item.day.daily_chance_of_rain)
            }
            data.push(newWeekDay)
        })

        setChartData(data)
    } , [fetchData])
    
  return (
    <></>
  )
}


    

