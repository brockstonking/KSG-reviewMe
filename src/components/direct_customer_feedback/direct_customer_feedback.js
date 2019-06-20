import React, { Component } from 'react';
import './direct_customer_feedback.css';
import Nav from '../nav/Nav';
import axios from 'axios';
import FeedbackDisplaySingle from './feedback_display_single/feedback_display_single';

class DirectCustomerFeedback extends Component {
    constructor(props){
        super(props);

        this.state = {
            feedback: [],
            businessName: ''
        }
    }

    componentWillMount(){
        axios.get('/auth/getsession')
        .then( results => {
            if (!results.data) {
                window.alert(`It looks like you are logged out of your account. Please log in to continue.`)
                this.props.history.push('/')
            }
        })
    }

    componentDidMount(){
        axios.get('/auth/getsession')
        .then( results => {
            this.setState({
                businessName: results.data.businessName
            })
            axios.post('/api/customerfeedback', { business_id: results.data.business_id })
            .then( results => {
                this.setState({
                    feedback: results.data
                })
            })
        })
    }

    render(){
        const feedbackList = this.state.feedback.map( (e, i) => {
            return <FeedbackDisplaySingle key={ i } index={ i } name={ e.name } phone={ e.phone } feedback={ e.feedback } />
        })
        return(
            <div className='directCustomerFeedbackParent'>
                <div className='colorBar'></div>
                    <div className='dashboardDisplayComponents'>
                        <Nav />
                        <div className='feedbacListDisplayDiv'>
                            <h2>All thumbs down comments for { this.state.businessName }</h2>
                            { feedbackList }
                        </div>
                    </div>
            </div>
        )
    }
}

export default DirectCustomerFeedback;