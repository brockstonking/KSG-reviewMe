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
            <div>
                <div>
                    <p>{ this.state.howLongAgo }</p>
                    <p>{ this.state.rating }</p>
                    <img src={ this.state.image } alt='' />
                    <p>{ this.state.author }</p>
                </div>
                <div>
                    { this.state.content }
                </div>
            </div>
        )
    }
}

export default Display_review;