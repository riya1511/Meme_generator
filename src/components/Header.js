import React from "react";
import face from '../images/trollFace.png';
import '../styles/style.css';

function Header(){
    return(
        <nav className="nav-bar">
            <img className="nav-img" src={face} alt='troll face'></img>
            <h1 className="nav-heading">Meme Generator</h1>
        </nav>
    )
}

export default Header