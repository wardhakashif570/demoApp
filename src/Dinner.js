import React from 'react';


function Dinner(props) {
    return (
      <div>
       <h1>Today we serve {props.dishname}</h1>
        <h1>Today we serve special sweet {props.sweet}</h1>
      </div>
    );
  }
  
  export default Dinner;