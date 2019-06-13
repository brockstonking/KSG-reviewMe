import React, { Component } from 'react';

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
        return(
            <div className='displayReviewsParent'>
                <div className='authorInformation'>>
                    <p className='howLongAgo'>{ this.state.howLongAgo }</p>
                    <p className='rating'>{ this.state.rating }</p>
                    <img className='authorImage' src={ this.state.image } alt='' />
                    <p className='authorName'>{ this.state.author }</p>
                </div>
                <div className='reviewContentDiv'>
                    <p className='reviewContentP'>{ this.state.content }</p>
                </div>
            </div>
        )
    }
}

export default Display_review;