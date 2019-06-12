import React, { Component } from 'react';
import './send_text.css';
import Last_ten from './last_ten/last_ten';


class Send_text extends Component {
    render(){
        return(
            <div>
                Send text
                <Last_ten />
            </div>
        )
    }
}

export default Send_text;