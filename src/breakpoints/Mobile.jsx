import React from 'react'
import MainCity from '../components/MainCity/MainCity';
import SearchBox from '../components/SearchBox/SearchBox';
import Theme from '../components/Theme/Theme';
import Notifications from '../components/Notifications/Notifications';
import User from '../components/User/User';
import Forecast from '../components/Forecast/Forecast';
import OtherCity from '../components/OtherCity/OtherCity';
import AddCity from '../components/AddCity/AddCity';
import Overview from '../components/Overview/Overview';
import MoreInfo from '../components/MoreInfo/MoreInfo';
import Social from '../components/Social/Social';


export default function Mobile({favCities , city}) {
  return (
    <>
        <div className='bg-light-secondary dark:bg-dark-secondary h-20 absolute top-0 left-0 w-full flex 2xl:hidden items-center px-5 justify-between'>
            <div className='flex items-center gap-x-1'>
                <Theme />
                <Notifications />
            </div>
            <User />
        </div>
        <div className='flex flex-col gap-y-5 w-full mt-20'>
            <SearchBox />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <MainCity city={city}/>
                <div className='flex flex-col gap-y-5'>
                   {favCities.length && favCities.length < 4 ? favCities.toReversed().map(cityUrl => <OtherCity city={cityUrl}/>) : favCities.length > 3 ? favCities.toReversed().slice(0 , ((favCities.length - 3) * -1)).map(cityUrl => <OtherCity city={cityUrl}/>) : <AddCity />}
                   {favCities.length >= 3 ? '' : <AddCity />}
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 h-full'>
                <Forecast city={city}/>
                <MoreInfo city={city}/>
                <Overview />
            </div>
            <Social/>
        </div>
    </>
  )
}
