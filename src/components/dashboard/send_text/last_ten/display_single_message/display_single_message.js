import React, { Component } from 'react';
import './display_single_message.css';

class Display_single_message extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='display_single_messageParent'>
                <div className='nameDiv displayMessageItem'>
                    <p className='name'>{this.props.firstName}</p>
                    <p className='name'>{this.props.lastName}</p>
                </div>
                <p className='displayMessageItemLastTen'>{this.props.date}</p>
                <p className='displayMessageItemLastTen'>{this.props.interactionStatus}</p>
            </div>
        )
    }
}

export default Display_single_message;