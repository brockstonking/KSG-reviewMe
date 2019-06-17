import React, { Component } from 'react';
import './reviews.css';
import axios from 'axios';
import Display_review from './display_review/display_review';

class Reviews extends Component {
    constructor(props){
        super(props);

        this.state = {
            reviews: []
        }

        this.componentDidMount = this.componentDidMount.bind( this );
    }

    componentDidMount(){
        axios.get('/api/reviews')
        .then( results => {
            this.setState({
                reviews: results.data.reviews
            })
        })

    }
    
    render(){
        const reviewList = this.state.reviews.map( (e, i) => {
            return <Display_review key={ i } author={ e.author_name } authorThumbnail={ e.profile_photo_url } rating={ e.rating } howLongAgo={ e.relative_time_description } content={ e.text } />
        })
        return(
            <div className='reviewsParent'>
                <h3>Last 5 reviews left on your google listing</h3>
                { reviewList }
            </div>
        )
    }
}

export default Reviews;