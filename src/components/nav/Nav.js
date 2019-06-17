import React, { Component } from 'react';
import './Nav.css';

import { Link } from 'react-router-dom';
import axios from 'axios';

class Nav extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: ''
        }
    }

    componentDidMount(){
        axios.get('/auth/getsession')
        .then( results => {
            this.setState({
                username: results.data.username
            })
        })
    }

    logout(){
        axios.post('/auth/logout')
        .then(results => {
            console.log('logged out')
        })
    }
    render(){
        return(
            <div className='navParent'>
                <div className='menuItems'>
                    <h1 className='welcomeLog'>Welcome, { this.state.username }</h1>
                    <Link className='logoutButton' to='/' onClick={ this.logout }><h1 className='logoutText'>logout</h1></Link>
                </div>
            </div>
        )
    }
}

export default Nav;