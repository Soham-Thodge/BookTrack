import React from 'react';

const TheaterSeats = ({ rows, seatsPerRow }) => {
  const renderSeats = () => {
    const seats = [];

    for (let row = 0; row < rows; row++) {
      const rowSeats = [];

      for (let seat = 0; seat < seatsPerRow; seat++) {
        const seatNumber = (row * seatsPerRow) + seat + 1;
        rowSeats.push(
          <div
            key={`${row}-${seat}`}
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: 'purple',
              display: 'inline-block',
              margin: '2px',
              textAlign: 'center',
              lineHeight: '30px',
            }}
          >
            {seatNumber}
          </div>
        );
      }

      seats.push(<div key={row} style={{ textAlign: 'center' }}>{rowSeats}</div>);
    }

    return seats;
  };

  return <div>{renderSeats()}</div>;
};

export default TheaterSeats;