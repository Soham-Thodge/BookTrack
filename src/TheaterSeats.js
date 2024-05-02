import React, { useState } from 'react';
const TheaterSeats = ({ rows, seatsPerRow }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (row, seat) => {
    const seatNumber = (row * seatsPerRow) + seat + 1;
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatNumber)) {
        return prevSelectedSeats.filter((num) => num !== seatNumber);
      } else {
        return [...prevSelectedSeats, seatNumber];
      }
    });
    console.log(selectedSeats);  
  };

  const renderSeats = () => {
    const seats = [];

    for (let row = 0; row < rows; row++) {
      const rowSeats = [];

      for (let seat = 0; seat < seatsPerRow; seat++) {
        const seatNumber = (row * seatsPerRow) + seat + 1;
        const isSelected = selectedSeats.includes(seatNumber);
        rowSeats.push(
          <div
            key={`${row}-${seat}`}
            className={`seat ${isSelected ? 'selected' : ''}`}
            style={{
              backgroundColor: seatNumber === 7 ? 'green' : isSelected ? 'red' : 'purple',
            }}
            onClick={() => handleSeatClick(row, seat)}
          >
            <span className="seat-number">{seatNumber}</span>
          </div>
        );
      }

      seats.push(<div key={row} className="seat-row">{rowSeats}</div>);
    }

    return seats;
  };

  return (
    <div className="theater-seats">
        <div className="screen">Seats Available</div>
        {renderSeats()}
        <div className="selected-seats">
            Selected Seats: {selectedSeats.map((seatNumber) => <span key={seatNumber}>{seatNumber} </span>)}
        </div>
    </div>
  );
};

export default TheaterSeats;