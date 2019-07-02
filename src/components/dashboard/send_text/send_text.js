import React, { Component } from 'react';
import './send_text.css';
import Last_ten from './last_ten/last_ten';
import axios from 'axios';


class Send_text extends Component {
    constructor(props){
        super(props);

        this.state = {
            location_id: null,
            firstName: '',
            lastName: '',
            phoneNumber: ''
        }

        this.sendText = this.sendText.bind( this );
    }
    
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
        if (this.state.firstName === ''){
            window.alert('Please enter a first name')
        } else {
            if (this.state.phoneNumber.split('').length === 10){
                axios.post('/api/sendmessage', { lastName: this.state.lastName, location_id: this.state.location_id, firstName: this.state.firstName, phoneNumber: this.state.phoneNumber })
                .then (results => {
                    this.setState({
                        firstName: '',
                        lastName: '',
                        phoneNumber: ''
                    })
                    window.location.reload();
                })
            } else {
                window.alert('Oops! It looks like this phone number was entered incorrectly. Please make sure it is correct and try again.')
            }
        }
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