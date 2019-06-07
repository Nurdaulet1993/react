import React, {Component} from 'react';
import Person from '../components/Persons/person';
import ErrorBoundary from '../components/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


import './App.css';
class App extends Component {

  state = {
    persons: [
      { id:"qwqe", name: 'Max', age: 23 },
      { id:"sdsd", name: 'Danial', age: 27 },
      { id:"dfdf", name: 'Benjin', age: 13 },
      { id:"vcvc", name: 'Alex', age: 21 }
    ],
    showPersons: true
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: 'Nurdaulet', age: 25},
        {name: newName, age: 27},
        {name: 'Benjin', age: 19},
        {name: 'Alex', age: 18}
      ]
    });
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
    console.log(index);
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
        
    });
  }
  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }
  render() {
    const style = {
      backgroundColor: 'red',
      color: '#fff',
      padding: '16px',
      ':hover': {
        backgroundColor: 'green',
        color: 'red'
      }
    }
    const name = 'Nurdaulet';
    let persons = null;

    if(this.state.showPersons) {
      persons = (<Persons  persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}/>
      );
      style.backgroundColor = 'red';
    }

    

    return (
      <div className="App">
        <Cockpit name={name} persons={this.state.persons} style={style} clicked={this.togglePersonsHandler}/>
        {persons}
      </div>  
    );
  }
  
}

export default  App;
