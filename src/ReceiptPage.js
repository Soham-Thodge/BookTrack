import React, {useEffect} from 'react';
import jsPDF from 'jspdf';


const ReceiptPage = ({ formData, selectedMovie, selectedSeats }) => {
    useEffect(() => {
        const formattedSelectedSeats = selectedSeats.join(', ');
        const doc = new jsPDF();

        doc.setFont('helvetica');
        doc.setFontSize(12);

        doc.setFillColor(255, 255, 255); 
        doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F');

        doc.setTextColor(0, 0, 0);
        doc.text('Receipt', 10, 10);
        doc.text(`Receipt\n\nName: ${formData.name}\nEmail: ${formData.email}\nDate: ${formData.date}\nNumber of Tickets: ${formData.number}\nSelected Movie: ${selectedMovie}\nSelected Seats:${selectedSeats}`, 10, 20);

        doc.save('receipt.pdf');
    }, [formData, selectedMovie, selectedSeats]);

    // Render nothing, as we don't need to return any JSX
    return null;
};

export default ReceiptPage;
