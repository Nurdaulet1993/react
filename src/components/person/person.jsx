import React, {Component} from 'react';
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
    return(
        <div className="Person">
            <p onClick={click}>Hello my name is {name}. I am {age} years old</p>
            <p>{children}</p>
            <input type="text" onChange={changed} value={name}/>
        </div>
    );
}
export default Person;