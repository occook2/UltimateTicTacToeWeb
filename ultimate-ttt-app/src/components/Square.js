import React, { useState } from 'react';
import './Square.css'; // Import the CSS file

function Square(props) {
    const [clicked, setClicked] = useState(false);
    const {address} = props;
    const {value} = props;

    const handleClick = () => {
        console.log(address)
        console.log(value)
        setClicked(true);
    };
  
    return (
    <div className='square'>
        {clicked ? ( 
        <img src={require('../assets/X.jpg')} className="square-image" alt="" />
      ) : (
        <button className="square-button" onClick={handleClick}>
          {/* Content of each square */}
        </button>
      )}
    </div>
    
  );
}

export default Square;

