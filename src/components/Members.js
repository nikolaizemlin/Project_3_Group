import React from 'react';
import axios from 'axios';

export default class Members extends React.Component{
    state={
        members: [],
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res);
            this.setState({ members: res.data});
        
        })
    }
    render(){
    return(
        <ul>
        
        {this.state.members.map(member=> <li>{member.name}</li>)}
        </ul>
    )
    }
}