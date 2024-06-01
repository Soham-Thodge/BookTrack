import React, { useEffect } from 'react';
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
    doc.text(`Receipt\n\nName: ${formData.name}\nEmail: ${formData.email}\nDate: ${formData.date}\nNumber of Tickets: ${formData.number}\nSelected Movie: ${selectedMovie}`, 10, 20);
    doc.save('receipt.pdf');
  }, [formData, selectedMovie, selectedSeats]);

  return null;
};

export default ReceiptPage;