import React from 'react';

const TimeSlot = ({ time, onSelect }) => {
  return (
    <button onClick={() => onSelect(time)} className="border p-2 m-2">
      {time}
    </button>
  );
};

export default TimeSlot;
