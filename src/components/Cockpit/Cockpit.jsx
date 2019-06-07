import React from 'react';
import './Cockpit.css';

const Cockpit = (props) => {

    const classes = [];

    if (props.persons.length <=2){
      classes.push('red');
    }
    if (props.persons.length <=1){
      classes.push('bold');
    }

    return(
        <div>
            <h1>Hello from {props.name} </h1>
            <p className={classes.join(' ')}>Tis is really working!</p>
            <button onClick={props.clicked} style={props.style}>Switch name</button>
        </div>
    );
}

export default Cockpit;