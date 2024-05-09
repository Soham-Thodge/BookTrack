import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieDropdown = () => {
    const [ movies, setMovies ] = useState([]);
    const [ selectedMovie, setSelectedMovie ] = useState('');
    const [ posters, setPosters ] = useState({});
    const [selectedMovieDetails, setSelectedMovieDetails] = useState(null);
    
    useEffect(() => {
        const imdbIds=['tt3896198','tt12637874','tt16426418','tt10869778','tt21235248','tt14539740','tt15239678','tt27744786','tt0111161','tt9179430','tt1684562','tt0120915'];
        
        const fetchMovies = async () => {
            try {
                const movieData = await Promise.all(imdbIds.map(async (id) => {
                    const response = await axios.get(`http://www.omdbapi.com/?&i=${id}&apikey=263b15b5`);
                    return response.data;
                }));

                // Extract and store posters
                const posterData = {};
                movieData.forEach(movie => {
                    if (movie.Poster !== 'N/A') {
                        posterData[movie.Title] = movie.Poster;
                    }
                });
                setPosters(posterData); // Update posters state
                setMovies(movieData);
            }
            catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    },[]);

    useEffect(() => {
        if(selectedMovie) {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?t=${selectedMovie}&apikey=263b15b5`)
                setSelectedMovieDetails(response.data);
            }
            catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };
        fetchMovieDetails();
    }
    else {
        setSelectedMovieDetails(null);
    }
}, [selectedMovie]);

    const handleChange = (e) => {
        setSelectedMovie(e.target.value);
    };

    return (
        <div>
            <select value={selectedMovie} onChange={handleChange}>
                <option value="">See Available Movies</option>
                {movies.map((movie) => (
                    <option key={movie.imdbID} value={movie.Title}>
                        {movie.Title}
                    </option>
                ))}
            </select>
            {selectedMovieDetails && (
                <div className="movie-card">
                    <h3>{selectedMovieDetails.Title}</h3>
                    {posters[selectedMovie] && (
                        <img src={posters[selectedMovie]} alt={selectedMovie} />
                    )}
                    <p>Released: {selectedMovieDetails.Year}</p>
                    <p>Genre: {selectedMovieDetails.Genre}</p>
                    <p>Director: {selectedMovieDetails.Director}</p>
                    <p>Plot: {selectedMovieDetails.Plot}</p>
                </div>
            )}
            <button type="submit"></button>
        </div>
        
    );
};

export default MovieDropdown;
