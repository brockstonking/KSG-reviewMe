import React, { Component } from 'react';
import './send_text.css';
import Last_ten from './last_ten/last_ten';
import axios from 'axios';


class Send_text extends Component {
    constructor(props){
        super(props);

        this.sate = {
            location_id: null
        }
    }
    componentDidMount(){
        axios.get('/api/textinformation')
        .then( results => {
            this.setState({
                location_id: results.data
            })
            console.log(this.state.location_id)
        })
    }
    render(){
        return(
            <div>
                Send text
                <Last_ten />
            </div>
        )
    }
}

export default Send_text;