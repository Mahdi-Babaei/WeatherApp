import React, { useEffect, useState } from 'react'

const weatherApi = 'https://api.weatherapi.com/v1'
const apiKey = '34ed6d8bb44d46aebf980813251109'

export default function useFetchData(apiMethod , targetCity , days = '1') {
    const [fetchData , setFetchData] = useState(null)
    const [isLoading , setIsLoading] = useState(true)
    const url = `${weatherApi}/${apiMethod}.json?key=${apiKey}&q=${targetCity}&days=${days}`


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFetchData(data))
            .catch(err => console.log(err))
            .finally(setIsLoading(false))
    } , [targetCity])

    return {fetchData , isLoading}
}
