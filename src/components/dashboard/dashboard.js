import React, { Component } from 'react';
import './dashboard.css';
import Graph_reviews from './graph_reviews/graph_reviews';
import Send_text from './send_text/send_text';
import axios from 'axios';
import Nav from './../nav/Nav';

class Dashboard extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        axios.get('/auth/getsession')
        .then( results => {
            if (!results.data) {
                window.alert(`It looks like you are logged out of your account. Please log in to continue.`)
                this.props.history.push('/')
            }
        })
    }

    render(){
        return(
            <div className='dashboardParent'>
                <div className='colorBar'></div>
                <div className='dashboardDisplayComponents'>
                    Dashboard
                    <Nav />
                    <div className='sendAndGraph'>
                        <Send_text />
                        <Graph_reviews />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;