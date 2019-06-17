import React, { Component } from 'react';
import './last_ten.css';
import Display_single_message from './display_single_message/display_single_message';
import axios from 'axios';

class Last_ten extends Component {
    constructor(props){
        super(props)

        this.state = {
            lastTenMessages: []
        }
    }

    componentDidMount(){
        axios.get('/api/lasttenmessages')
        .then( results => 
            this.setState({
                lastTenMessages: results.data
            })
        )
    }

    render(){
        const lastTen = this.state.lastTenMessages.map( (e, i) => {
            return <Display_single_message key={ i } firstName={ e.customer_first_name } lastName={ e.customer_last_name } date={ e.date } interactionStatus={ e.interaction_status } />
        })
        return(
            <div className='displayLastTenMessagesDiv'>
                <div className='lastTenTitleDiv'>
                    <h3 className='lastTenTitle'>Last ten messages sent</h3>
                </div>
                { lastTen }
            </div>
        )
    }
}

export default Last_ten;