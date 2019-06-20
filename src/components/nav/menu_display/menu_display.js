import React, { Component } from 'react';
import './menu_display.css';
import { Link } from 'react-router-dom';

class MenuItemDisplay extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Link className='menuItemDisplayLink' to={ this.props.link }>
                <div className='menuItemDisplayParent'>
                    <p className='menuItemDisplayTitle'>{ this.props.title }</p>
                </div>
            </Link>
        )
    }
}

export default MenuItemDisplay;