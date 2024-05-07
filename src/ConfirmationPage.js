import React from "react";

const ConfirmationPage = ({ location }) => {
    const formData = location.state ? location.state.formData : {};
    const selectedSeats = location.state ? location.state.selectedSeats : [];

    const handlePrintReceipt = () => {
        window.print();
    };

    return (
        <div className="confirmation-page">
            <h1>Confirmation</h1>
            <h2>Booking Details</h2>
            <p>Name: {formData.name}</p>
            <p>Date: {formData.date}</p>
            <p>Number of Tickets: {formData.number}</p>
            <p>Selected Movie: {formData.movie}</p>

            <h2>Selected Seats</h2>
            <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'No seats selected'}</p>

            <button onClick={handlePrintReceipt}>Print Receipt</button>
        </div>
    );
};

export default ConfirmationPage;
