import React, { Component } from 'react';
import './display_review.css';

class Display_review extends Component{
    constructor(props){
        super(props);

        this.state = {
            author: this.props.author,
            image: this.props.authorThumbnail,
            howLongAgo: this.props.howLongAgo,
            content: this.props.content,
            rating: this.props.rating
        }
    }

    componentDidMount() {
    }
    render(){
        let numOfStars = []
        for (let i = 0; i < this.state.rating; i++) {
            numOfStars.push('https://upload.wikimedia.org/wikipedia/commons/2/27/AnimatedStar.gif')
        }
        let starRating = numOfStars.map( (e, i) => {
            return <img key={ i } className='ratingStarIndividual' src={ e } alt='' />
        })
        return(
            <div className='displayReviewsParent'>
                <div className='authorInformation'>
                    <div className='authorImageAndName'>
                        <img className='authorImage' src={ this.state.image } alt='' />
                        <p className='authorName'>{ this.state.author }</p>
                    </div>
                    <div className='ratingAndTimeAgo'>
                        <div className='starDisplayDiv'>
                            { starRating }
                        </div>
                        <p className='howLongAgo'>{ this.state.howLongAgo }</p>
                    </div>
                </div>
                <div className='reviewContentDiv'>
                    <p className='reviewContentP'>{ this.state.content }</p>
                </div>
            </div>
        )
    }
}

export default Display_review;