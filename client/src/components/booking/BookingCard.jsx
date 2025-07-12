import React from 'react';

const BookingCard = ({ turf }) => {
  return (
    <div className="border p-4 m-2">
      <h3 className="text-xl">{turf.name}</h3>
      <p>{turf.description}</p>
      <button className="bg-green-600 text-white p-2">Book Now</button>
    </div>
  );
};

export default BookingCard;
