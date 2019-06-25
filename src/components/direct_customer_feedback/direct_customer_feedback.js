import React, { Component } from 'react';
import './direct_customer_feedback.css';
import Nav from '../nav/Nav';
import axios from 'axios';
import FeedbackDisplaySingle from './feedback_display_single/feedback_display_single';
import { connect } from 'react-redux';

class DirectCustomerFeedback extends Component {
    constructor(props){
        super(props);

        this.state = {
            feedback: []
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
                            <h2>All thumbs down comments for { this.props.businessName }</h2>
                            { feedbackList }
                        </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { businessName } = state;
    return {
        businessName: businessName
    }
}

export default connect(mapStateToProps, null)(DirectCustomerFeedback);