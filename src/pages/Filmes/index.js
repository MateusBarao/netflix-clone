import Header from "../../components/Header"
import Movie from "../../components/Movie"
import "./style.css"
import { useState } from "react";

export default function Filmes (){
    const [movies, setMovies] = useState([]);

    const BASE_URL = process.env.REACT_APP_API_TMDB_BASE_URL;

    const API_KEY = process.env.REACT_APP_API_TMDB_KEY;

    const settings = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${API_KEY}`
        }
    }

    async function addMovie(){
        const response = await fetch(`${BASE_URL}/movie/popular`, settings);

        const data = await response.json();
        
        setMovies([...data.results, ...movies])
    }

    return (
        <div>
            <Header />
            <main className="movies">
                <div className="movies-list">
                <button onClick={addMovie}>Adicione um filme</button>
                {movies.map((movie) => {
                        return(
                            <Movie 
                                key={movie.id}
                                title={movie.title}
                                poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                date={movie.release_date}
                                votes={movie.vote_average}
                            />
                        );
                    })}
                </div>
            </main>
        </div>
    )
}