import React, { Component } from 'react';
import './feedback_form.css'

class FeedbackForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            phone: '',
            feedback: ''
        }
    }

    render(){
        return(
            <div className='feedbackFormParent'>
                <div className='colorBar feedbackColorBar'></div>
                <div className='inputsDiv'>
                    <p>Name:</p>
                    <input />
                    <p>Phone:</p>
                    <input />
                    <p>Feedback:</p>
                    <textarea />
                </div>
            </div>
        )
    }
}

export default FeedbackForm;