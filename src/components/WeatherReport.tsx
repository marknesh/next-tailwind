'use client';

const Weather = (props: WeatherProps) => {
  const { temperature, windDirection, windSpeed } = props;

  return (
    <div className=' h-36 flex items-center bg-black'>
      <div className='w-11/12 mx-auto  flex items-center justify-between'>
        {props.children}
      </div>
    </div>
  );
};

export default Weather;
