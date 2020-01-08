import React, { Component } from 'react';
import List from './List'
import Title from './Title'

class Main extends Component{
    render(){
        return <div>
                    <Title title={'toDos'}/>
                    <List tasks={['M22','Inas']}/>
                    <List tasks={['Simba','Koki']}/>
                </div>
        
    }
}
export default Main;