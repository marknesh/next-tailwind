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

interface WindDetailsProps {
  Icon: React.ElementType;
  value: string | number;
  windPropertyUnit: string;
  windProperty: string;
}
