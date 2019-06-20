import React, { Component } from 'react';
import './feedback_display_single.css';

class FeedbackDisplaySingle extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props.total)
    }

    render(){
        const style = this.props.index % 2 === 0 ? { backgroundColor: '#7777' } : {}
        return(
            <div className='display_single_messageParent' style={ style }>
                <div className='nameDiv displayMessageItem'>
                    <p className='name'>{ this.props.name }</p>
                </div>
                <p className='displayMessageItem'>{this.props.phone}</p>
                <p className='displayMessageItem customerFeedback'>{this.props.feedback}</p>
            </div>
        )
    }
}

export default FeedbackDisplaySingle;