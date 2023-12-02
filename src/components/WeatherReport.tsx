'use client';
import { PiArrowUpRightBold } from 'react-icons/pi';
import { FaWind } from 'react-icons/fa';
import WindDetails from './WindDetails';
import Record from './Record';
import Image from 'next/image';
import { useState } from 'react';

const Weather = (props: {
  data: WeatherProps[];
  children: React.ReactNode;
}) => {
  const { temperature, windDirection, windSpeed } = props.data[0];
  const [weatherDetails, setWeatherDetails] = useState({
    temperature,
    windDirection,
    windSpeed,
  });

  const handleWeatherUpdate = () => {
    const randomIndex = Math.floor(Math.random() * 7);

    const randomWindData = props.data[randomIndex];

    setWeatherDetails({
      temperature: randomWindData.temperature,
      windDirection: randomWindData.windDirection,
      windSpeed: randomWindData.windSpeed,
    });
  };

  return (
    <div className=' h-full py-10  bg-black'>
      <div className='w-11/12  flex flex-col space-y-10 lg:space-y-0  mx-auto  lg:flex-row lg:space-x-5 lg:items-center lg:justify-between'>
        {props.children}

        <div className='grid gap-y-5 md:flex  md:space-x-6 md:gap-0 xl:flex'>
          <Record name={'Race'} value={'01'} />
          <Record name={'Distance km'} value={'234.10'} />

          <div className=' flex  justify-between space-x-2 items-center border border-gray-300 px-3 py-2'>
            <div className='px-2'>
              <p className='text-[10px] text-yellow-400'>WEATHER</p>

              <WindDetails
                Icon={FaWind}
                value={weatherDetails.windSpeed}
                windProperty={'Wind Speed'}
                windPropertyUnit={'KM/H'}
              />

              <div className='w-full h-px my-2 bg-gray-300' />

              <WindDetails
                Icon={PiArrowUpRightBold}
                value={weatherDetails.windDirection}
                windProperty={'Wind Direction'}
                windPropertyUnit={'Gusts'}
              />
            </div>

            <div>
              {weatherDetails.temperature > 16 ? (
                <Image
                  width='64'
                  height='64'
                  priority
                  style={{ objectFit: 'contain' }}
                  src='https://img.icons8.com/external-justicon-flat-justicon/64/external-sun-weather-justicon-flat-justicon-2.png'
                  alt='external-sun-weather-justicon-flat-justicon-2'
                />
              ) : (
                <Image
                  width='64'
                  height='64'
                  priority
                  style={{ objectFit: 'contain' }}
                  src='https://img.icons8.com/external-justicon-lineal-color-justicon/64/external-rainy-spring-justicon-lineal-color-justicon.png'
                  alt='external-rainy-spring-justicon-lineal-color-justicon'
                />
              )}

              <button
                onClick={handleWeatherUpdate}
                className='whitespace-nowrap font-semibold hover:text-yellow-500  mt-3 px-3 py-1 bg-white rounded-full text-gray-900'
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
