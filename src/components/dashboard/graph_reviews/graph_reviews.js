import React, { Component } from 'react';
import './graph_reviews.css';
import Graph from './graph/graph';
import Reviews from './reviews/reviews';

class Graph_reviews extends Component {
    render(){
        return(
            <div>
                Graph reviews 
                <Graph />
                <Reviews />
            </div>
        )
    }
}

export default Graph_reviews;