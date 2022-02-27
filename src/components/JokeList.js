import React from 'react';

import Joke from './Joke';
import classes from './MoviesList.module.css';

const JokeList = (props) => {
  console.log(props.jokes.length)
  return (
    <ul className={classes['movies-list']}>
      {props.jokes.map((joke) => (
        <Joke
          key={joke.id}
          title={joke.text}
          category={joke.category}
        />
      ))}
    </ul> 
  );
};

export default JokeList;
