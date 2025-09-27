import React, { useEffect, useState } from 'react'

const weatherApi = 'https://api.weatherapi.com/v1'
const apiKey = '5da074e34e3e41e6b6583350252709'

export default function useFetchData(apiMethod , targetCity , days = '1' , aqi = 'no') {
    const [fetchData , setFetchData] = useState(null)
    const [isLoading , setIsLoading] = useState(true)
    const url = `${weatherApi}/${apiMethod}.json?key=${apiKey}&q=${targetCity}&days=${days}&aqi=${aqi}`
    
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFetchData(data))
            .catch(err => console.log(err))
            .finally(setIsLoading(false))
    } , [targetCity])

    return {fetchData , isLoading}
}
