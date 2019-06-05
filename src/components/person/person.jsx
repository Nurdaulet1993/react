import React, {Component} from 'react';
import Radium from 'radium';

import './person.css';

// export default class Person extends Component {
//     render() {
//         const {name, age, click} = this.props;

//         return(
//             <div>
//                 <p onClick={click}>Hello my name is {name}. I am {age} years old</p>
//                 <p>{this.props.children}</p>
//             </div>
            
//         );
//     }
// }

 const Person = ({name, age, click, children, changed, index}) => {
    const style = {
        '@media (max-width: 600px)': {
            backgroundColor: 'red',
            width: '200px'
        }
    }
    return(
        <div className="Person" style={style}>
            <p onClick={click}>Hello my name is {name}. I am {age} years old</p>
            <p>{children}</p>
            <input type="text" onChange={changed} value={name}/>
        </div>
    );
}
export default Radium(Person);