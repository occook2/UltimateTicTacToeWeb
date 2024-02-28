import React, { useState } from 'react';
import './Square.css'; // Import the CSS file

function Square({ address, value, possibleMove, onSquareClick}) {
    const handleClick = () => {     
        // Call the onSquareClick function passed from the parent component
        onSquareClick(address); // Address will be sent to Server. JSON response will go to BigBoard
    };

    // Determine if the square is filled
    var filled = true
    if (value === "") {
        filled = false
    }
    
    // Determines which squares shoul have buttons
    if (possibleMove && !filled) {
      return (
        <div className='square'>
          <button className="square-button" onClick={handleClick}>
            {/* Content of each square */}
          </button>
        </div>
      );
    }
    else if (filled) {
      return (
        <div className='square'>
          {value}
        </div>
      );
    }
    else {
      return (
        <div className='square'></div>
      );
    }
}

export default Square;

