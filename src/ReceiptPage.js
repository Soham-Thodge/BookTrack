import React from 'react';
import jsPDF from 'jspdf';

const ReceiptPage = ({ formData, selectedMovie, selectedSeats }) => {
    const downloadReceiptAsPDF = () => {
        const doc = new jsPDF();
        doc.text(`Receipt\n\nName: ${formData.name}\nEmail: ${formData.email}\nDate: ${formData.date}\nNumber of Tickets: ${formData.number}\nSelected Movie: ${selectedMovie}\nSelected Seats: ${selectedSeats.join(', ')}`, 10, 10);
        doc.save('receipt.pdf');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1>Receipt</h1>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Date: {formData.date}</p>
            <p>Number of Tickets: {formData.number}</p>
            <p>Selected Movie: {selectedMovie}</p>
            <button className="Hero-button" onClick={downloadReceiptAsPDF}>Download as PDF</button>
        </div>
    );
};
export default ReceiptPage;
