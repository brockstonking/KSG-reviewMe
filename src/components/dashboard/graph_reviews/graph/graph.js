import React, { Component } from 'react';
import './graph.css';

class Graph extends Component {
    render(){
        return(
            <div className='graphComponentParent'>
                <img className='graphImage' src='https://image.freepik.com/free-vector/business-growth-graph_53876-90457.jpg' alt='' />
            </div>
        )
    }
}

export default Graph;