import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Auth from './components/auth/Auth';
import FeedbackForm from './components/customer_feedback/feedback_form/feedback_form';
import ThumbSelector from './components/customer_feedback/thumb_selector/thumb_selector';
import ThankYou from './components/customer_feedback/thank_you/thank_you';

export default (
        <Switch>
            <Route exact path='/' component={ Auth } />
            <Route path='/dashboard' component={ Dashboard } />
            <Route exact path='/feedback/:messageid' component={ ThumbSelector } />
            <Route path='/customer_feedback/form/:businessid' component={ FeedbackForm } />
            <Route path='/thankyou' component={ ThankYou } />
        </Switch>
)
