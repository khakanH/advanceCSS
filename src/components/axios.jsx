import React, { Component } from 'react'
import axios from 'axios';
class AxiosAPI extends Component {
    constructor(props) {
        super(props)
        this.state = {
             persons:[]
        }
    }
    componentDidMount(){
        axios.get(`http://jsonplaceholder.typicode.com/users`).then(res=>{
        console.log(res);
        this.setState({
            persons:res.data
        });
        });
    }

    render() {
        return (
            <div>
                <h1>Hello Axios</h1>
                <ul>
                    {this.state.persons.map(person=>(
                    <li key={person.id}>{person.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}


export default AxiosAPI


