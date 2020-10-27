import React, { useEffect, useRef, useState } from 'react';
import { Movie } from '../movies/Movie.js';
import Filter from './Filter.js';


const movies = [
    {
        name: "Step up"
    },
    {
        name: "Tokyo Ghoul"
    },
    {
        name: "Prison Break"
    }
];

const API_URL = "https://api.themoviedb.org/3/discover/movie?&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&api_key=";
const CONFIG_URL ="https://api.themoviedb.org/3/configuration?api_key=";


export function MoviesList() {
    const [filter, setFilter] = useState("");
    const [movies, setMovies] = useState([]);
    const [config, setConfig] = useState({})
    // const ulRef = useRef(null);
    // const ref = useRef(null);

    const getMovies = async () => {
        try {
            const res = await fetch(API_URL + process.env.MOVIE_API);
            const movies = await res.json();
            console.log(movies);
            setMovies(movies.results)
        } catch (e) {
            console.error(e);
        }
    }

    const getConfig = async () => {
        try {
            const res = await fetch(CONFIG_URL + process.env.MOVIE_API)
            const config = await res.json();
            setConfig(config)
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getMovies();
        getConfig();
    }, [])

    return (
        <div>
            {/* <div ref={ulRef}>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(ref.current.value);
            }}>
                <input ref={ref}/>
                <button>try</button>
            </form> */}
            <Filter setFilter={setFilter} filter={filter} />
            <ul className="movie-list">
                {movies.filter((movie) => {
                    return movie.title.toLowerCase().includes(filter.toLowerCase())
                }).
                    map((movie) => {
                        return (
                            <Movie key={movie.id} movie={movie} config={config} />
                        )
                    })}
            </ul>
        </div>
    )
}