import React, { Component } from 'react';
import './thank_you.css';

class ThankYou extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='feedbackFormParent'>
                <div className='colorBar feedbackColorBar'></div>
                <h2 className='thankYouText'>Thank you for your suggestions. We are always striving to provide the best possible service to our customers, and your comments are greatly appreciated!</h2>
            </div>
        )
    }
}

export default ThankYou;