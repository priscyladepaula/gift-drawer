import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import NewRegister from './components/NewRegister'
import ResetPassword from './components/ResetPassword'

export default function Routes() {
    return (
        <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/new-register" exact component={NewRegister} />
            <Route path="/reset-password" exact component={ResetPassword} />
        </Switch>
    )
}