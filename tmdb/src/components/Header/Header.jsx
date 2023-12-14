import React from 'react'
import { Link} from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"
import "../../components/Header/Style.css";

const Header = () => {

    return (
        <nav id='navbar'>
            <h2>
                <Link to="/"><BiCameraMovie />Projeto TMDB - Campinho Digital</Link>                
            </h2>
            {/* <form>
                <input type="text" placeholder='Busque um filme'/>
                <button type='submit'><BiSearchAlt2 /></button>
            </form> */}
        </nav>
    )
}

export default Header