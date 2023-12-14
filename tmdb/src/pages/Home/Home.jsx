import React, { useState, useEffect } from "react";
import {Container, MovieList, Movie} from "./Style";
import {Link} from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Home() {

    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=65c7e3bf56d73f5fb579dd16f4a51a54&language=en-US&page=1')
            .then(response => response.json())
            .then(data => setMovies(data.results))

    }, [])

    return (
        <Container>
            <Header />            
            <h1>Popular Movies</h1>            
            <MovieList>
                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <Link to={`/Details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title} /></Link>                            
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
            <Footer />            
        </Container>
    )
}

export default Home;
