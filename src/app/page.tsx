import Weather from '@/components/WeatherReport';

async function fetchWeatherReport() {
  const res = await fetch('http://localhost:3001/weather');

  if (!res.ok) {
    throw new Error('Failed to fetch weather data');
  }

  return res.json();
}

export default async function Home() {
  const data = await fetchWeatherReport();

  return (
    <main>
      <Weather />
    </main>
  );
}
