import Header from "../../components/Header"
import Movie from "../../components/Movie"
import "./style.css"
import { useState } from "react";

export default function Filmes (){
    const [movies, setMovies] = useState([
        {
            poster: "https://br.web.img3.acsta.net/pictures/17/05/29/23/31/530814.jpg",
            title: "Teste",
            date: "2021",
            votes: "8.5",
        },
        {
            poster: "https://br.web.img3.acsta.net/pictures/17/05/29/23/31/530814.jpg",
            title: "Teste",
            date: "2021",
            votes: "8.5",
        },
        {
            poster: "https://br.web.img3.acsta.net/pictures/17/05/29/23/31/530814.jpg",
            title: "Teste",
            date: "2021",
            votes: "8.5",
        },
        {
            poster: "https://br.web.img3.acsta.net/pictures/17/05/29/23/31/530814.jpg",
            title: "Teste",
            date: "2021",
            votes: "8.5",
        },
    ]);

    return (
        <div>
            <Header />
            <main className="movies">
                <div className="movies-list">
                {movies.map((movie) => {
                        return(
                            <Movie 
                                title={movie.title}
                                poster={movie.poster}
                                date={movie.date}
                                votes={movie.votes}
                            />
                        );
                    })}
                </div>
            </main>
        </div>
    )
}