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
    // on function below, location id is set and a request is sent to the server for a bit.ly link. Bit.ly link is then
    // stored in state for use in sending an axios.post request to send a message. 
    componentDidMount(){
        axios.get('/api/textinformation')
        .then( results => {
            this.setState({
                location_id: results.data
            })
            // const urlToSend = `http://reviewme.com/feedback/${ this.state.location_id }`
            const urlToSend = 'https://www.google.com'
            axios.post('/api/bitly', { long_url: urlToSend })
            .then( results => {
                this.setState({
                    bitly_link: results.data
                })
                console.log(results.data)
            })
        })
    }

    sendText(){
        
    }

    render(){
        return(
            <div className='send_textParent'>
                Send text
                <div className='inputsDiv'>
                    <div className='firstLastName'>
                        <div className='firstNameDiv'>
                            <p className='firstNameReq'>First name:</p>
                            <input className='firstInput sendInput' />
                        </div>
                        <div className='lastNameDiv'>
                            <p className='lastNameReq'>Last name:</p>
                            <input className='lastInput sendInput' />
                        </div>
                    </div>
                    <div className='phoneDiv'>
                        <p className='phoneReq'>Phone number:</p>
                        <input className='phoneInput sendInput' />
                    </div>
                    <button className='sendButton' onClick={ this.sendText }>Send</button>
                </div>
                <div>
                    <Last_ten />
                </div>
            </div>
        )
    }
}

export default Send_text;