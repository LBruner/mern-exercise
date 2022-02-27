import React, { useRef } from 'react';

import classes from './AddJoke.module.css';

function AddJoke(props) {
  const textRef = useRef('');
  const categoryRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const joke = {
      text: textRef.current.value,
      category: categoryRef.current.value,
    };

    props.onAddJoke(joke);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Text</label>
        <input type='text' id='title' ref={textRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Category</label>
        <textarea rows='5' id='opening-text' ref={categoryRef}></textarea>
      </div>
      <button>Add Joke</button>
    </form>
  );
}

export default AddJoke;
