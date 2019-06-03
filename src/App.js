import React, {Component} from 'react';
import Person from './components/person';
class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 23},
      {name: 'Danial', age: 27},
      {name: 'Benjin', age: 13},
      {name: 'Alex', age: 21}
    ]
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

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Nurdaulet', age: 25},
        {name: event.target.value, age: 27},
        {name: 'Benjin', age: 19},
        {name: 'Alex', age: 18}
      ]
    });
  }

  render() {
    const name = 'Nurdaulet';

    return (
      <div className="App">
        <h1>Hello from {name} </h1>
        <button onClick={() => this.switchNameHandler('Merjan')}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Merjan')}
          changed={this.nameChangeHandler}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Person name="Samen" age='20'>Hello Worlrfvd</Person>
      </div>
    );
  }
  
}

export default App;
