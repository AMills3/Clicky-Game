import React from 'react';
import "./style.css";

function Navbar(props) {
    return(
        <nav className="navBar navbar-light bg-light sticky-top">
            <h5>Clicky Game</h5>
            <h5>{props.message}</h5>
            <h5>Your Score is {props.score} | Top Score {props.highScore}</h5>
        </nav>
    );
};

export default Navbar;