import React, { Component } from 'react';
import './send_text.css';
import Last_ten from './last_ten/last_ten';
import axios from 'axios';


class Send_text extends Component {
    constructor(props){
        super(props);

        this.sate = {
            location_id: null,
            bitly_link: ''
        }

        this.sendText = this.sendText.bind( this );
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

    sendText(){
        // const urlToSend = `http://reviewme.com/feedback/${ this.state.location_id }`
        const urlToSend = 'https://www.google.com'
        axios.post('/api/bitly', { long_url: urlToSend })
        .then( results => {
            this.setState({
                bitly_link: results.data
            })
        })
    }

    render(){
        return(
            <div>
                Send text
                <button onClick={ this.sendText }>Send</button>
                <Last_ten />
            </div>
        )
    }
}

export default Send_text;