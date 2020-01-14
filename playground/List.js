import React, { Component } from 'react';

// Using jsx
const tasks =['Simba','Koki','M22'];

// class Names must be Uppercase
class List extends Component {
    render (){
        return (
            <ol> 
                {this.props.tasks.map((task , index)=> 
                <li key={index}> {task} </li>)}
             </ol>
        )
    }
}

export default List;