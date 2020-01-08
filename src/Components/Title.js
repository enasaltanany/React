import React, { Component } from 'react';


class Title extends Component {
    render(){
    return <h1> {this.props.title}</h1>
    }
}


// means i can access this component which called title 
export default Title;