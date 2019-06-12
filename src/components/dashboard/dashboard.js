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

    componentDidMount(){
        this.verify();
    }

    verify(){
        axios.get('/auth/session')
        .then( results => {
        })
    }
    render(){
        return(
            <div className='dashboardParent'>
                <div>
                    Dashboard
                    <Nav />
                    <Send_text />
                    <Graph_reviews />
                </div>
            </div>
        )
    }
}

export default Dashboard;