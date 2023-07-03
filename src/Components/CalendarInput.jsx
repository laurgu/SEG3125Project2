import React, { useState } from 'react';

function CalendarInput() {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div>
      <label htmlFor='calendar'></label>
      <input
        type='date'
        id='calendar'
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
}

export default CalendarInput;
