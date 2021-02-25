import React from 'react';

function RandomNumber(props) {
  return <h1>
{Math.floor(Math.random(props.max) * Math.floor(props.min))
}

  </h1>
  
}

export default RandomNumber;

// {props.min} {props.max}





