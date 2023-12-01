'use client';
import { PiArrowUpRightBold } from 'react-icons/pi';
import { FaWind } from 'react-icons/fa';
import WindDetails from './WindDetails';
import Record from './Record';

const Weather = (props: WeatherProps) => {
  const { temperature, windDirection, windSpeed } = props;

  return (
    <div className=' h-40 flex items-center bg-black'>
      <div className='w-11/12 mx-auto  flex items-center justify-between'>
        {props.children}

        <div className='flex  space-x-4'>
          <Record name={'Race'} value={'01'} />
          <Record name={'Distance km'} value={'234.10'} />

          <div className='flex space-x-2 items-center border border-gray-300 px-3 py-2'>
            <div className='px-2'>
              <p className='text-[10px] text-yellow-400'>WEATHER</p>

              <WindDetails
                Icon={FaWind}
                value={windSpeed}
                windProperty={'Wind Speed'}
                windPropertyUnit={'KM/H'}
              />

              <div className='w-full h-px my-2 bg-gray-300' />

              <WindDetails
                Icon={PiArrowUpRightBold}
                value={windDirection}
                windProperty={'Wind Direction'}
                windPropertyUnit={'Gusts'}
              />
            </div>

            <div>sun icons</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
