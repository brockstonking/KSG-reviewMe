import React, { Component } from 'react';
import './Nav.css';
import MenuItemDisplay from './menu_display/menu_display';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import * as Actions from './../../ducks/reducer';

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

    logout = () => {
        axios.post('/auth/logout')
        .then(results => {
            this.props.businessInfo('')
        })
    }

    render(){
        const menuLinkItems = [
            {
                title: 'Home',
                link: '/dashboard'
            },
            {
                title: 'All texts sent',
                link: '/allmessages'
            },
            {
                title: 'Direct customer feedback',
                link: '/directfeedback'
            },
            {
                title: 'Contact us',
                link: '/contactus'
            }
        ];
        const menuItemsDisplay = menuLinkItems.map( (e, i) => {
            return <MenuItemDisplay key={ i } link={ e.link } title={ e.title } />
        })
        return(
            <div className='navParent'>
                <div className='menuItems'>
                    <div className='navBarMenuIcon navBarMenuIconDiv'>
                        <img className='navBarMenuIcon' src='http://assets.stickpng.com/thumbs/588a64e0d06f6719692a2d10.png' alt='' />
                        <div className='navBarMenuItemsDisplayParentDiv'>
                            { menuItemsDisplay }
                        </div>
                    </div>
                    <h1 className='welcomeLog'>Welcome, { this.state.username }</h1>
                    <Link className='logoutButton' to='/' onClick={ this.logout }><h1 className='logoutText'>logout</h1></Link>
                </div>
            </div>
        )
    }
}

export default connect(state => state, Actions)(Nav);