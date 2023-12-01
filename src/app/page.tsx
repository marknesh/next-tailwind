import PigeonInfo from '@/components/PigeonInfo';
import Record from '@/components/Record';
import WeatherReport from '@/components/WeatherReport';

/**
 * Fetches data from the local json server
 *
 * @returns {WeatherProps} random weather data
 */
async function fetchWeatherReport() {
  const res = await fetch('http://localhost:3001/weather');

  if (!res.ok) {
    throw new Error('Failed to fetch weather data');
  }

  const data: WeatherProps[] = await res.json();

  return data[Math.floor(Math.random() * 7)];
}

export default async function Home() {
  const data = await fetchWeatherReport();

  return (
    <main className='flex flex-col min-h-[50vh] justify-center'>
      <WeatherReport
        temperature={data?.temperature}
        windDirection={data.windDirection}
        windSpeed={data.windSpeed}
      >
        <PigeonInfo />

        <div className='flex items-center space-x-4'>
          <Record name={'Race'} value={'01'} />
          <Record name={'Distance km'} value={'234.10'} />
        </div>
      </WeatherReport>
    </main>
  );
}
