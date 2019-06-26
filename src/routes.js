import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Auth from './components/auth/Auth';
import FeedbackForm from './components/customer_feedback/feedback_form/feedback_form';
import ThumbSelector from './components/customer_feedback/thumb_selector/thumb_selector';
import ThankYou from './components/customer_feedback/thank_you/thank_you';
import AllMessages from './components/all_messages/all_messages';
import DirectCustomerFeedback from './components/direct_customer_feedback/direct_customer_feedback';
import ContactUs from './components/contact_us/contact_us';
import AddClient from './components/admin/add_client/add_client';

export default (
        <Switch>
            <Route exact path='/' component={ Auth } />
            <Route path='/dashboard' component={ Dashboard } />
            <Route exact path='/feedback/:messageid' component={ ThumbSelector } />
            <Route path='/customer_feedback/form/:businessid' component={ FeedbackForm } />
            <Route path='/thankyou' component={ ThankYou } />
            <Route path='/allmessages' component={ AllMessages } />
            <Route path='/directfeedback' component={ DirectCustomerFeedback } />
            <Route path='/contactus' component={ ContactUs } />
            <Route path='/admin/addclient' component={ AddClient } /> 
        </Switch>
)
