import React, { useState } from 'react';
import './Square.css'; // Import the CSS file

function Square(props) {
    const [clicked, setClicked] = useState(false);
    const {address} = props;
    const {value} = props;

    const handleClick = () => {
        console.log(address)
        setClicked(true);
    };

    var filled = true
    if (value === "") {
        filled = false
    }
    
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

