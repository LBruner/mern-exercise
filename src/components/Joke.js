import React from 'react';

import classes from './Movie.module.css';

const Joke = (props) => {
    console.log(props)
    return (
        <li className={classes.movie}>
            <h2>{props.title}</h2>
            <h3>{props.category}</h3>
        </li>
    );
};

export default Joke;
