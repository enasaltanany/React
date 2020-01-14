import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Main from './Components/Main'
import * as consts from './styles/stylesheet.css';




// Dynamic Code
// const tasks =['task1','task2','task3'];
// const elment = React.createElement('ol',null,
//     tasks.map((task,index)=>
//         React.createElement('li',{key:index},task)
//     )
// )


// Static Code
// const elment= React.createElement('ol', null,
// React.createElement('li', null,'task1')
// )
ReactDOM.render(<Main/>,document.getElementById('root'));

