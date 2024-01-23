import { mockData } from '../../data/mockData';
import styles from './weatherStatus.module.css';

type dateRangeLength = {
  startDate: string;
  endDate: string;
};

interface WeatherStatusProps {
  dateRange: dateRangeLength;
}

export default function WeatherStatus({ dateRange }: WeatherStatusProps) {
  const getWeatherForRange = () => {
    const startDate = new Date(dateRange.startDate);
    const endDate = new Date(dateRange.endDate);

    const matchingWeatherEntry = mockData.find((entry) => {
      const currentDate = new Date(entry.date);
      return currentDate >= startDate && currentDate <= endDate;
    });

    return matchingWeatherEntry?.weather || 'unknown';
  };

  const weatherStatus = () => {
    const weather = getWeatherForRange();

    switch (weather) {
      case 'sunny':
        return '☀️';
      case 'cloudy':
        return '☁️';
      case 'snow':
        return '❄️';
      case 'clear':
        return '✨';
      case 'partly cloudy':
        return '⛅';
      case 'windy':
        return '🌬️';
      default:
        return '🤷';
    }
  };

  return (
    <>
      <h1 className={styles.message}>
        The weather in this period will most likely be: {weatherStatus()}{' '}
        {getWeatherForRange()} {weatherStatus()}
      </h1>
    </>
  );
}
