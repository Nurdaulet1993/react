import React, {Component} from 'react';
import Person from './components/person';
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
      persons = (
        
        <div>
          {this.state.persons.map((person, index) => {
            return(
              <Person 
                id = {index}
                name={person.name} 
                age={person.age} 
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)}/>
            );
        })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Merjan')}
            changed={this.nameChangeHandler}/>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
          <Person name="Samen" age='20'>Hello Worlrfvd</Person> */}
        </div>
        
      );
      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <=2){
      classes.push('red');
    }
    if (this.state.persons.length <=1){
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hello from {name} </h1>
          <p className={classes.join(' ')}>Tis is really working!</p>
          <button onClick={this.togglePersonsHandler} style={style}>Switch name</button>
          {persons}
        </div>
    );
  }
  
}

export default  App;
