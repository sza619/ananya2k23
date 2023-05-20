"use client";

import React, {useState} from "react";
import ReactDOM from "react";
import ReactCardFlip from 'react-card-flip';

const CardFlip = () => {
  
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div>
          This is the front of the card.
          <button onClick={handleClick}>Click to flip</button>
        </div>
  
        <div>
          This is the back of the card.
          <button onClick={handleClick}>Click to flip</button>
        </div>
      </ReactCardFlip>
    )
}

ReactDOM.render(<CardFlip />, document.querySelector("#root"))