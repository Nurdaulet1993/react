import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import Person from './person';

const Persons = (props) => props.persons.map((person, index) => {
        return(
          <ErrorBoundary>

            <Person 
                id = {index}
                name={person.name} 
                age={person.age} 
                key={person.id}
                changed={(event) => props.changed(event, person.id)}
                click={() => props.clicked(index)}/>

          </ErrorBoundary>
        );
    })

export default Persons;