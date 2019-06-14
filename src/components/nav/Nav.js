import React, { Component } from 'react';
import './Nav.css';

import { Link } from 'react-router-dom';
import axios from 'axios';

class Nav extends Component {

    logout(){
        axios.post('/auth/logout')
        .then(results => {
            console.log('logged out')
        })
    }
    render(){
        return(
            <div className='navParent'>
                <Link className='logoutButton' to='/' onClick={ this.logout }><h1>logout</h1></Link>
            </div>
        )
    }
}

export default Nav;