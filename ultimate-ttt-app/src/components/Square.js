import React, { useState } from 'react';
import './Square.css'; // Import the CSS file

function Square({ address, value, possibleMove, onSquareClick}) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        console.log(possibleMove)
        // Call the onSquareClick function passed from the parent component
        onSquareClick(address);
    };

    var filled = true
    if (value === "") {
        filled = false
    }
    
    // TODO: Use if statements to create multiple return statements. One should be filled ("X/O")
    // Another should be empty, (not filled, not possible), and the last should be a button (not filled, possible)
    return (
    <div className='square'>
        {filled ? ( 
        value
      ) : (
        <button className="square-button" onClick={handleClick}>
          {/* Content of each square */}
        </button>
      )}
    </div>
    
  );
}

export default Square;

