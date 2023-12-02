import PigeonInfo from '@/components/PigeonInfo';

import WeatherReport from '@/components/WeatherReport';

/**
 * Fetches data from the local json server
 *
 * @returns {WeatherProps[]}
 */
async function fetchWeatherReport() {
  const res = await fetch('http://localhost:3001/weather');

  if (!res.ok) {
    throw new Error('Failed to fetch weather data');
  }

  const data: WeatherProps[] = await res.json();

  return data;
}

export default async function Home() {
  const data = await fetchWeatherReport();

  return (
    <main>
      <WeatherReport data={data}>
        <PigeonInfo />
      </WeatherReport>
    </main>
  );
}
