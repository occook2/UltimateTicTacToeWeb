import React, { useState } from 'react';
import './Square.css'; // Import the CSS file

function Square({ address, value, possibleMove, onSquareClick}) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);     
        // Call the onSquareClick function passed from the parent component
        onSquareClick(address);
    };

    var filled = true
    if (value === "") {
        filled = false
    }
    
    // TODO: Use if statements to create multiple return statements. One should be filled ("X/O")
    // Another should be empty, (not filled, not possible), and the last should be a button (not filled, possible)
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

