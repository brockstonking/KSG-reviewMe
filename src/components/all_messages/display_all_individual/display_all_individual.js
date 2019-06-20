import React, { Component } from 'react';
import './display_all_individual.css';

class DisplayAllIndividual extends Component {
    constructor(props){
        super(props);

        this.state = {

        };
    }

    render(){
        const style = this.props.index % 2 === 0 ? { backgroundColor: '#7777' } : {}
        return(
            <div className='display_single_messageParent' style={ style }>
                <div className='nameDiv displayMessageItem'>
                    <p className='name'>{this.props.customerFirstName}</p>
                    <p className='name'>{this.props.customerLastName}</p>
                </div>
                <p className='displayMessageItem'>{this.props.date}</p>
                <p className='displayMessageItem'>{this.props.interactionStatus}</p>
            </div>
        )
    }
}

export default DisplayAllIndividual;