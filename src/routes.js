import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Auth from './components/auth/Auth';
import FeedbackForm from './components/customer_feedback/feedback_form/feedback_form';
import ThumbSelector from './components/customer_feedback/thumb_selector/thumb_selector';

export default (
        <Switch>
            <Route exact path='/' component={ Auth } />
            <Route path='/dashboard' component={ Dashboard } />
            <Route exact path='/feedback/:locationid' component={ ThumbSelector } />
            <Route path='/feedback/form' component={ FeedbackForm } />
        </Switch>
)
