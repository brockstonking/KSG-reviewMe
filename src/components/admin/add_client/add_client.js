import React, { Component } from 'react';
import './add_client.css';
import axios from 'axios';

class AddClient extends Component {
    constructor(props){
        super(props);

        this.state = {
            businessName: '',
            username: '',
            password: '',
            reenterPassword: '',
            userFirstName: '',
            userLastName: '',
            email: '',
            manager: 'false',
            locationName: '',
            locationNickname: '',
            locationTextMessage: '',
            locationImageURL: '',
            businessId: null,
            registered: false
        }
    }

    handleInputs = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    changeCheckbox = () => {
        if (this.state.manager === 'true') {
            this.setState({
                manager: 'false'
            })
        } else {
            this.setState({
                manager: 'true'
            })
        }
    }

    registerUser = () => {
        if (this.state.registered){
            if (this.state.password === this.state.reenterPassword){
                this.setState({
                    businessId: null,
                    username: '',
                    password: '',
                    reenterPassword: '',
                    userFirstName: '',
                    userLastName: '',
                    email: '',
                    manager: 'false'
                })
                axios.post('/register/user', { business_id: this.state.businessId, username: this.state.username, password: this.state.password, firstName: this.state.userFirstName, lastName: this.state.userLastName, email: this.state.email, manager: this.state.manager })
                .then( results => {
                    debugger
                })
            } else {
                window.alert('Passwords do not match')
            }
        } else {
            window.alert('Please register business name before adding users and locations.')
        }
    }

    registerBusiness = () => {
        debugger
        if (this.state.businessName){
            axios.post('/register/businessname', { businessName: this.state.businessName })
            .then( results => {
                this.setState({
                    businessId: results.data.business_id,
                    registered: true,
                    businessName: ''
                })
            })
        } else {
            window.alert('Please enter a business name to register')
        }
    }

    render = () => {
        return(
            <div className='addClientPageParent'>
                <div className='addClientBusinessNameReqDiv aCTitleAndInput'>
                    <p className='addClientBusinessNameTitle'>Business name:</p>
                    <input className='addClientBusinessNameInput' name='businessName' onChange={ e => this.handleInputs(e) } />
                    <button onClick={ this.registerBusiness } >Register</button>
                </div>
                <div className='addClientUsersDiv'>
                    <div className='addClientAddUserDiv'>
                        <div className='aCURD aCTitleAndInput'>
                            <p className='aCURT'>Username:</p>
                            <input className='aCUI' name='username' onChange={ e => this.handleInputs(e) } />
                        </div>
                        <div className='aCPRD aCTitleAndInput'>
                            <p className='aCPRT'>Password:</p>
                            <input className='aCPI' name='password' onChange={ e => this.handleInputs(e) } />
                        </div>
                        <div className='aCPRRD aCTitleAndInput'>
                            <p className='aCPRRT'>Re-enter Password:</p>
                            <input className='aCPRI' name='reenterPassword' onChange={ e => this.handleInputs(e) } />
                        </div>
                        <div className='aCNameRD aCTitleAndInput'>
                            <p className='aCNameRT'>Name:</p>
                            <input className='aCNameIFirst' placeholder='First' name='userFirstName' onChange={ e => this.handleInputs(e) } />
                            <input className='aCNameILast' placeholder='Last' name='userLastName' onChange={ e => this.handleInputs(e) } />
                        </div>
                        <div className='aCEmailRD aCTitleAndInput'>
                            <p className='aCEmailRT'>Email:</p>
                            <input className='aCEmailI' name='email' onChange={ e => this.handleInputs(e) } />
                        </div>
                        <div className='aCManagerRD aCTitleAndInput'>
                            <p className='aCManagerRT'>Manager:</p>
                            <input type='checkbox' className='aCManagerI' onClick={ this.changeCheckbox } />
                        </div>
                        <button onClick={ this.registerUser } >Register user</button>
                    </div>
                    <div className='addClientDisplayUsersDiv'>

                    </div>
                </div>
                <div className='aCAddLocationsDiv' style={ {borderTop: 'solid black 2px'} }>
                    <div className='aCAddLocationsInput'>
                        <div className='aCLocationBusinessNameDiv aCTitleAndInput'>
                            <p className='aCLocationBusinessNameReq'>Location business name:</p>
                            <input className='aCLocationBusinessNameInput' name='locationName' onChange={ e => this.handleInputs(e) } />
                        </div>
                        <div className='aCLocationNicknameDiv aCTitleAndInput'>
                            <p className='aCLocationNicknameReq'>Location nickname:</p>
                            <input className='aCLocationNicknameInput' name='locationNickname' onChange={ e => this.handleInputs(e) } />
                        </div>
                        <div className='aCLocationTextMessageDiv aCTitleAndInput'>
                            <p className='aCLocationTextMessageReq'>Text message:</p>
                            <textarea rows={ 6 } className='aCLocationTextMessageInput' name='locationTextMessage' onChange={ e => this.handleInputs(e) } />
                        </div>
                        <div className='aCLocationImageURLDiv aCTitleAndInput'>
                            <p className='aCLocationImageURLReq'>Image URL:</p>
                            <input className='aCLocationImageURLInput' name='locationImageURL' onChange={ e => this.handleInputs(e) } />
                        </div>
                    </div>
                    <div className='aCDisplayLocationsDiv'>

                    </div>
                </div>
                <button>Add business info</button>
            </div>
        )
    }
}

export default AddClient;