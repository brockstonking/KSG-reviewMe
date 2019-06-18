import React, { Component } from 'react';
import './thumb_selector.css';
import axios from 'axios'; 
import { Link } from 'react-router-dom';

class ThumbSelector extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            locationName: '',
            location_id: null,
            place_id: null,
            display_platform_selection: null
        }

        this.thumbsDown = this.thumbsDown.bind( this );
    }

    componentWillMount(){
        axios.post('/api/messageinformation', { location_id: this.props.match.params.locationid })
        .then( results => {
            const { customer_first_name, location_name, location_id, place_id } = results.data[0]
            this.setState({
                name: customer_first_name,
                locationName: location_name,
                location_id: location_id,
                place_id: place_id
            })
        })
    }

    thumbsDown(){
        this.props.history.push('/customer_feedback/form')
    }

    render(){
        const nameTitle = `Hi, ${ this.state.name }!`
        const instructionsText = `Thank you for choosing ${ this.state.locationName }.`
        return(
            <div className='feedbackSelectorParent'>
                <div className='colorBar feedbackColorBar'></div>
                <div className='welcomeAndInstructionsDiv'>
                    <h3 className='nameTitleText'>{ nameTitle }</h3>
                    <h2 className='instructionsText'>{ instructionsText }</h2>
                    <h2 className='howDidWeDo'>How did we do?</h2>
                </div>
                <div className='thumbsDiv'>
                    <a href={`https://search.google.com/local/writereview?placeid=${ this.state.place_id }`} ><img className='thumbsUp thumb' src='http://assets.stickpng.com/thumbs/5a0abc585a997e1c2cea106e.png' alt='' /></a>
                    <img onClick={ this.thumbsDown } className='thumbsDown thumb' src='http://assets.stickpng.com/thumbs/5a0abcbf5a997e1c2cea106f.png' alt='' />
                </div>
                <p className='afterClickInstructions'>After making your selection, please follow the prompts to leave your review.</p>
            </div>
        )
    }
}

export default ThumbSelector;