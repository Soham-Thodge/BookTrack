import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TheaterSeats from './TheaterSeats';
import ReceiptPage from './ReceiptPage';
import { createClient } from '@supabase/supabase-js';
import { useAuth } from './AuthContext';

const supabaseURL = 'https://jimvadrzkxsntjyklhrs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppbXZhZHJ6a3hzbnRqeWtsaHJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4ODk5MzIsImV4cCI6MjAzMDQ2NTkzMn0.bSnHVGSvMtgLfLYuqqgw4crQFkHtGsc6uwXLig6hOEA';
const supabase = createClient(supabaseURL, supabaseKey);

const BookingForm = () => {
    const { currentUser } = useAuth();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        number: '',
        movie: ''
    });

    const [movies, setMovies] = useState([]);
    const [posters, setPosters] = useState({});
    const [selectedMovieDetails, setSelectedMovieDetails] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const imdbIds = ['tt3896198', 'tt12637874', 'tt16426418', 'tt10869778', 'tt21235248', 'tt14539740', 'tt15239678', 'tt27744786', 'tt0111161', 'tt9179430'];

        const fetchMovies = async () => {
            try {
                const movieData = await Promise.all(imdbIds.map(async (id) => {
                    const response = await axios.get(`https://www.omdbapi.com/?&i=${id}&apikey=263b15b5`);
                    return response.data;
                }));

                const posterData = {};
                movieData.forEach(movie => {
                    if (movie.Poster !== 'N/A') {
                        posterData[movie.Title] = movie.Poster;
                    }
                });
                setPosters(posterData);
                setMovies(movieData);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSeatClick = (seatNumber) => {
        setSelectedSeats((prevSelectedSeats) => {
            if (prevSelectedSeats.includes(seatNumber)) {
                return prevSelectedSeats.filter((num) => num !== seatNumber);
            } else {
                return [...prevSelectedSeats, seatNumber];
            }
        });
    };

    const handleMovieChange = (selectedMovieTitle) => {
        const selectedMovie = movies.find(movie => movie.Title === selectedMovieTitle);
        setSelectedMovieDetails(selectedMovie);
        setFormData({ ...formData, movie: selectedMovieTitle });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!currentUser) {
            alert('Please log in to book tickets.');
            return;
        }

        try {
            const { data, error } = await supabase.from('bookings').insert([
                {
                    email: formData.email,
                    name: formData.name,
                    date: formData.date,
                    number_of_tickets: formData.number,
                    movie: formData.movie,
                }
            ]);
            if (error) {
                throw error;
            }

            console.log("Booking data stored in Supabase:", data);
        } catch (error) {
            console.error('Error storing booking data in Supabase:', error);
        }
        setSubmitted(true);
    };

    return (
        <div className='booking-section'>
            <h1 className='Booking-title'>Booking Form</h1>
            {!submitted ? (
                <form className="booking-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Number of Tickets:</label>
                        <input type="number" id="number" name="number" value={formData.number} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="movie">Select Movie:</label>
                        <select id="movie" name="movie" value={formData.movie} onChange={(e) => handleMovieChange(e.target.value)} required>
                            <option value="">See Available Movies</option>
                            {movies.map((movie) => (
                                <option key={movie.imdbID} value={movie.Title}>
                                    {movie.Title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        {selectedMovieDetails && (
                            <div className="movie-card">
                                <h3>{selectedMovieDetails.Title}</h3>
                                {posters[selectedMovieDetails.Title] && (
                                    <img src={posters[selectedMovieDetails.Title]} alt={selectedMovieDetails.Title} />
                                )}
                                <p>Released: {selectedMovieDetails.Year}</p>
                                <p>Genre: {selectedMovieDetails.Genre}</p>
                                <p>Director: {selectedMovieDetails.Director}</p>
                                <p>Plot: {selectedMovieDetails.Plot}</p>
                            </div>
                        )}
                    </div><br />
                    <TheaterSeats
                        rows={5}
                        seatsPerRow={10}
                        handleSeatClick={handleSeatClick}
                    />
                    <button className='confirm' type="submit">Confirm</button>
                </form>
            ) : (
                <ReceiptPage
                    formData={formData}
                    selectedMovie={formData.movie}
                    selectedSeats={selectedSeats}
                />
            )}
        </div>
    );
};

export default BookingForm;
