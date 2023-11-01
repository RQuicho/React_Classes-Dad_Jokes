import React, { Component, useState } from "react";
import "./Joke.css";

/** A single joke, along with vote up/down buttons. */

const Joke = ({id, vote, votes, text}) => {
  const handleClickUp = () => {
    vote(id, +1);
  }
  const handleClickDown = () => {
    vote(id, -1);
  }


  return (
    <div className="Joke">
    <div className="Joke-votearea">
      <button onClick={handleClickUp}>
        <i className="fas fa-thumbs-up" />
      </button>

      <button onClick={handleClickDown}>
        <i className="fas fa-thumbs-down" />
      </button>

      {votes}
    </div>

    <div className="Joke-text">{text}</div>
  </div>
  )
}

export default Joke;
