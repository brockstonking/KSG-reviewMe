import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Mood_selector from './components/mood_selector/mood_selector';
import Dashboard from './components/dashboard/dashboard';
import Auth from './components/auth/Auth';
import Customer_form from './components/customer_form/customer_form';

export default (
        <Switch>
            <Route exact path='/' component={ Auth } />
            <Route path='/dashboard' component={ Dashboard } />
            <Route exact path='/feedback' component={ Mood_selector } />
            <Route path='/feedback/contact' component={ Customer_form } />
        </Switch>
)
