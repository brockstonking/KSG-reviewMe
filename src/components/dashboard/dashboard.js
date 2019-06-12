import React, { Component } from 'react';
import './dashboard.css';
import Graph_reviews from './graph_reviews/graph_reviews';
import Send_text from './send_text/send_text';

class Dashboard extends Component {
    render(){
        return(
            <div className='dashboardParent'>
                <div>
                    Dashboard

                    <Send_text />
                    <Graph_reviews />
                </div>
            </div>
        )
    }
}

export default Dashboard;