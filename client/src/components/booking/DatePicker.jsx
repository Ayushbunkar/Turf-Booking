import React from 'react';

const DatePicker = ({ selectedDate, onDateChange }) => {
  return (
    <input
      type="date"
      value={selectedDate}
      onChange={(e) => onDateChange(e.target.value)}
      className="border p-2 mb-4 w-full"
    />
  );
};

export default DatePicker;
