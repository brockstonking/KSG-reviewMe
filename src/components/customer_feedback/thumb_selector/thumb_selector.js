import React, { Component } from 'react';
import './thumb_selector.css';

class ThumbSelector extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <img className='thumbsUp' src='http://assets.stickpng.com/thumbs/5a0abc585a997e1c2cea106e.png' alt='' />
                <img className='thumbsDown' src='http://assets.stickpng.com/thumbs/5a0abcbf5a997e1c2cea106f.png' alt='' />
            </div>
        )
    }
}

export default ThumbSelector;