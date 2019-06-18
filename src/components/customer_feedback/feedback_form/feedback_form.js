import React, { Component } from 'react';
import './feedback_form.css'
import axios from 'axios';

class FeedbackForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            phone: '',
            feedback: '',
            business_id: null
        }

        this.udpateState = this.udpateState.bind( this );
        this.submitCustomerFeedback = this.submitCustomerFeedback.bind( this );
    }

    componentWillMount(){
        this.setState({
            business_id: this.props.match.params.businessid
        })
    }

    udpateState(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitCustomerFeedback(){
        axios.post('/api/submitcustomerfeedback', { name: this.state.name, phone: this.state.phone, feedback: this.state.feedback, business_id: this.state.business_id })
        .then( () => {
            this.setState({
                name: '',
                phone: '',
                feedback: ''
            })
            this.props.history.push('/thankyou')
        })
    }

    render(){
        return(
            <div className='feedbackFormParent'>
                <div className='colorBar feedbackColorBar'></div>
                <div className='titleHowDiv' ><h3 className='titleHowText'>Please let us know how we can improve!</h3></div>
                <div className='feedbackInputsDiv inputsDiv'>
                    <p className='nameReq'>Name:</p>
                    <input value={ this.state.name } onChange={ e => this.udpateState(e) } name='name' className='nameInput feedbackFormInput' />
                    <p className='phoneReq'>Phone:</p>
                    <input value={ this.state.phone } onChange={ e => this.udpateState(e) } name='phone' className='phoneInput feedbackFormInput' />
                    <p className='feedbackReq'>How we can improve:</p>
                    <textarea value={ this.state.feedback } rows='8' onChange={ e => this.udpateState(e) } name='feedback' className='feedbackInput feedbackFormInput' />
                </div>
                <div className='submitButtonDiv'>
                    <div onClick={ this.submitCustomerFeedback } className='submitButton'><p className='submitButtonText'>Submit</p></div>
                </div>
            </div>
        )
    }
}

export default FeedbackForm;