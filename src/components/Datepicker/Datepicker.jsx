
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export const MyDatepicker = () => {
  const [startDate, setStartDate] = useState(new Date());



  return (
    <div style={{ padding: '50px' }}>
      <DatePicker
        className="customStyle"
        selected={startDate}
        onChange={date => setStartDate(date)}
      />
    </div>
  );
};
