import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';
import DailyForecast from '../DailyForecast';

const WeeklyForecast = () => {
  const weeklyForecast = useSelector((state) => state.weatherForecast.data.daily);

  if (!weeklyForecast) return null;

  return (
    <Card>
      <h2>Weekly Forecast</h2>
      {weeklyForecast.map((day) => {
        const { dt: unixTimestamp, weather, temp } = day;
        const { description, icon } = weather[0];
        const date = new Date(unixTimestamp * 1000);
        const dateToday = new Date(Date.now()).getDate();
        const dayOfWeek =
          dateToday === date.getDate()
            ? 'Today'
            : date.toLocaleDateString('en-US', { weekday: 'long' });

        return (
          <DailyForecast
            key={unixTimestamp}
            dayOfWeek={dayOfWeek}
            weatherDescription={description}
            weatherIcon={icon}
            minTemp={temp.min}
            maxTemp={temp.max}
          />
        );
      })}
    </Card>
  );
};

export default WeeklyForecast;
