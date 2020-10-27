import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const BASE_URL = "https://api.themoviedb.org/3/movie/";
const API_KEY = `?api_key=`;
const IMAGE_URL = "https://image.tmdb.org/t/p/";
const POSTER_SIZE = "w342";
const BACKDROP_SIZE = "original";

export default function Moviedetail() {
    // useParams is a custom Hook from the react-router-dom
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const getMovie = async () => {
        try {
            const res = await fetch(BASE_URL + id + API_KEY + process.env.MOVIE_API);
            const newMovie = await res.json()
            setMovie(newMovie)
        } catch (e) {
            console.error(e);
        }
    }
    useEffect(() => {
        getMovie()
    }, [id]);
    if (!movie.title) {
        return null
    }
    return (
        <div>
            <img
                className="backdrop"
                src={IMAGE_URL + BACKDROP_SIZE + movie.backdrop_path}
                alt={movie.title + " backdrop"}
            />
            <div className="detail-details">
                <img
                    className="detail-poster"
                    src={IMAGE_URL + POSTER_SIZE + movie.poster_path}
                    alt={movie.title + " poster"}
                />
                <div>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <ul>
                        {movie.genres.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                    <Link to="/">Back to main page</Link>
                </div>
            </div>
        </div>
    )
}