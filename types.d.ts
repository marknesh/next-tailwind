interface WeatherProps {
  windSpeed: number;
  windDirection: string;
  temperature: number;
  children?: React.ReactNode;
}

interface RecordProps {
  name: string;
  value: string;
}
