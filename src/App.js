import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import BookingForm from "./BookingForm";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ReceiptPage from "./ReceiptPage";



const App = () => {
  const images = [
    require("./images/Dune.jpg"),
    require("./images/Extraction.jpg"),
    require("./images/MissionImpossible.jpg"),
    require("./images/Vikings.jpg")
  ];

  return (
    <div>
      <Router>
        <Navbar/>
        <HeroSection images={images}/>
        <Routes>
            <Route path="/" element={<BookingForm />} />
            <Route path="/receipt" element={<ReceiptPage/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
