import React, { Component } from 'react';
import './mood_selector.css';

import { Link } from 'react-router-dom';

class Nav extends Component {
    render(){
        return(
            <div>
                <Link to='/'><h1>logout</h1></Link>
            </div>
        )
    }
}

export default Nav;