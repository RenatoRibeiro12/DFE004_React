import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import "./Style.css";

function Details() {

    const {id} = useParams()
    
    const [movie, setMovie] = useState({})
    const image_path = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=65c7e3bf56d73f5fb579dd16f4a51a54&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {

                const {title, poster_path, overview, release_date } =  data

                const movie = {
                    id,
                    title: title,
                    sinopse: overview,
                    image: `${image_path}${poster_path}`,
                    releaseDate: release_date
                }

                setMovie(movie)
            })
    
}, [id])

    return (

        <div className="container">
            <div className="movie">
                <img className="capa" src={movie.image} alt={movie.sinopse} />
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className="release-date">Release date: {movie.releaseDate}</span>
                    <Link to="/"><button>Voltar</button></Link>
                    
                </div>
            </div>
        </div>
    )

}

export default Details;