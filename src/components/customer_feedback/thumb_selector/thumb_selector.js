import React, { Component } from 'react';
import './thumb_selector.css';
import axios from 'axios'; 

class ThumbSelector extends Component {
    constructor(props){
        super(props);

        this.state = {
            message_id: null,
            name: '',
            locationName: '',
            location_id: null,
            place_id: null,
            display_platform_selection: null, 
            business_id: null
        }

        this.thumbsDown = this.thumbsDown.bind( this );
        this.thumbsUp = this.thumbsUp.bind( this );
    }

    componentWillMount(){
        axios.post('/api/messageinformation', { message_id: this.props.match.params.messageid })
        .then( results => {
            console.log(results)
            const { customer_first_name, location_name, location_id, place_id, business_id, message_id } = results.data[0]
            this.setState({
                message_id: message_id,
                name: customer_first_name,
                locationName: location_name,
                location_id: location_id,
                place_id: place_id,
                business_id: business_id
            })
        })
    }

    thumbsDown(){
        axios.post('/api/message/thumbsdown', { message_id: this.state.message_id })
        this.props.history.push(`/customer_feedback/form/${ this.state.business_id }`)
    }

    thumbsUp(){
        axios.post('/api/message/thumbsup', { message_id: this.state.message_id })
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
                    <h2 onClick={ this.thumbsUp } className='howDidWeDo'>How did we do?</h2>
                </div>
                <div className='thumbsDiv'>
                    <a onClick={ this.thumbsUp } href={`https://search.google.com/local/writereview?placeid=${ this.state.place_id }`} ><img className='thumbsUp thumb' src='http://assets.stickpng.com/thumbs/5a0abc585a997e1c2cea106e.png' alt='' /></a>
                    <img onClick={ this.thumbsDown } className='thumbsDown thumb' src='http://assets.stickpng.com/thumbs/5a0abcbf5a997e1c2cea106f.png' alt='' />
                </div>
                <p className='afterClickInstructions'>After making your selection, please follow the prompts to leave your review.</p>
            </div>
        )
    }
}

export default ThumbSelector;