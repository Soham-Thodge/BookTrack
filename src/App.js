import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingForm from "./BookingForm";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ContactFooter from "./ContactFooter";
import ReceiptPage from "./ReceiptPage";
import TheaterSeats from "./TheaterSeats";
import SignUp from "./SignUp";
import Login from "./Login";
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./AuthContext";

const App = () => {
  const images = [
    require("./images/Dune.jpg"),
    require("./images/Extraction.jpg"),
    require("./images/MissionImpossible.jpg"),
    require("./images/Vikings.jpg")
  ];

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <HeroSection images={images} />
        <Routes>
          <Route path="/" element={<BookingForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/booking"
            element={
              <PrivateRoute>
                <>
                  <BookingForm />
                  <TheaterSeats rows={5} seatsPerRow={10} />
                </>
              </PrivateRoute>
            }
          />
          <Route
            path="/receipt"
            element={
              <PrivateRoute>
                <ReceiptPage />
              </PrivateRoute>
            }
          />
          <Route path="/contact" element={<ContactFooter />} />
        </Routes>
        <ContactFooter />
      </Router>
    </AuthProvider>
  );
};

export default App;
