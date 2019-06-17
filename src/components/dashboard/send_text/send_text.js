import React, { Component } from 'react';
import './send_text.css';
import Last_ten from './last_ten/last_ten';
import axios from 'axios';


class Send_text extends Component {
    constructor(props){
        super(props);

        this.state = {
            location_id: null,
            bitly_link: '',
            firstName: '',
            lastName: '',
            phoneNumber: ''
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
        })
    }

    updateInput(name, val){
        this.setState({
            [name]: val
        })
    }

    sendText(){
        // const urlToSend = `http://reviewme.com/feedback/${ this.state.location_id }?customerphone=${ this.state.phoneNumber }`
        const urlToSend = 'https://www.google.com'
        axios.post('/api/bitly', { long_url: urlToSend })
        .then( results => {
            axios.post('/api/sendmessage', { lastName: this.state.lastName, location_id: this.state.location_id, firstName: this.state.firstName, phoneNumber: this.state.phoneNumber, bitlyLink: results.data })
            .then (results => {
                window.location.reload();
            })
            this.setState({
                firstName: '',
                lastName: '',
                phoneNumber: ''
            })
        })

        
    }

    render(){
        return(
            <div className='textInfoParent'>
                <div className='send_textParent'>
                    <h3 className='directionTitle'>Enter a customer's information below to send a review request to their cell phone</h3>
                    <div className='inputsDiv'>
                        <div className='firstLastName'>
                            <div className='firstNameDiv'>
                                <p className='firstNameReq'>First name:</p>
                                <input value={ this.state.firstName } onChange={ e => this.updateInput( e.target.name, e.target.value ) } name='firstName' className='firstInput sendInput' />
                            </div>
                            <div className='lastNameDiv'>
                                <p className='lastNameReq'>Last name:</p>
                                <input value={ this.state.lastName } onChange={ e => this.updateInput( e.target.name, e.target.value ) } name='lastName' className='lastInput sendInput' />
                            </div>
                        </div>
                        <div className='phoneDiv'>
                            <p className='phoneReq'>Cell number:</p>
                            <input value={ this.state.phoneNumber } onChange={ e => this.updateInput( e.target.name, e.target.value ) } name='phoneNumber' className='phoneInput sendInput' />
                        </div>
                        <div className='sendTextButton' onClick={ this.sendText }><p className='sendTextWord'>Send</p></div>
                    </div>
                </div>
                <div className='lastTenDiv'>
                    <Last_ten />
                </div>
            </div>
        )
    }
}

export default Send_text;