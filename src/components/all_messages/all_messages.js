import React, { Component } from 'react';
import './all_messages.css';
import Nav from './../nav/Nav';
import axios from 'axios';
import DisplayAllIndividual from './display_all_individual/display_all_individual';
import { connect } from 'react-redux';

class AllMessages extends Component{
    constructor(props){
        super(props);

        this.state = {
            businessId: null,
            allMessagesSent: []
        }

        this.componentWillMount = this.componentWillMount.bind( this );
    }

    componentWillMount(){
        axios.get('/auth/getsession')
        .then( results => {
            if (!results.data) {
                window.alert(`It looks like you are logged out of your account. Please log in to continue.`)
                this.props.history.push('/')
            } else {
                this.setState({
                    businessId: results.data.business_id
                })
                axios.post('/api/message/getall', { business_id: this.state.businessId })
                .then( results => {
                    this.setState({
                        allMessagesSent: results.data
                    })
                })
            }
        })
    }

    render(){
        const messageList = this.state.allMessagesSent.map( (e, i) => {
            return <DisplayAllIndividual key={ i } index={ i } customerFirstName={ e.customer_first_name } customerLastName={ e.customer_last_name } date={ e.date } interactionStatus={ e.interaction_status } />
        })
        return(
            <div className='allMessagesParent'>
                <div className='colorBar'></div>
                <div className='dashboardDisplayComponents'>
                    <Nav />
                    <div className='allSentContentDiv'>
                        <h2 className='allSentContentTitle'>All messages sent from { this.props.businessName }</h2>
                    </div>
                    <div className='messageListDiv'>
                        { messageList }
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

export default connect(mapStateToProps, null)(AllMessages);