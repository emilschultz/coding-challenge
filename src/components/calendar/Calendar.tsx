import { DateRange } from 'react-date-range';
import { useState } from 'react';
import WeatherStatus from '../weatherStatus/weatherStatus';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import styles from './calendar.module.css';

interface NewRange {
  startDate: Date;
  endDate: Date;
  key: string;
  color: string;
}

export default function Calendar() {
  const [range, setRange] = useState<NewRange[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
      color: '#d04e4a',
    },
  ]);

  const handleDateChange = (dateItems: { selection?: NewRange }) => {
    if (
      dateItems.selection &&
      dateItems.selection.startDate &&
      dateItems.selection.endDate
    ) {
      setRange([dateItems.selection]);
      console.log(range[0]);
    }
  };

  const lastDateInRange = range.length - 1;
  const lastEndDate = range[lastDateInRange].endDate.toISOString();

  return (
    <>
      <div className={styles.calendar}>
        <div className={styles.weather}>
          <WeatherStatus
            dateRange={{
              startDate: range[0].startDate.toISOString(),
              endDate: lastEndDate,
            }}
          />
        </div>
        <div>
          <DateRange
            className={styles.wrap}
            onChange={handleDateChange}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction='horizontal'
            color='#fff'
          />
        </div>
      </div>
    </>
  );
}
