import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../../Containers/Home/Home'
import Login from '../../Containers/Login/Login'
import UserSignUp from '../../Containers/Login/UserSignUp/UserSignUp'
import RestroSignUp from '../../Containers/Login/RestroSignUp/RestroSignUp'
import UserProfile from '../../Containers/Profile/UserProfile'
import EmailNotVerified from '../../Containers/EmailNotVerified/EmailNotVerified'
import RegisterAs from '../../Containers/Login/RegisterAs/RegisterAs'
import Dashboard from '../../Containers/Dashboard/Dashboard'
import history from '../History'


class BasicRouter extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Route exact path='/' component={Login} />
                <Route  path='/user-sign-up' component={UserSignUp} />
                <Route  path='/restro-sign-up' component={RestroSignUp} />
                <Route  path='/userprofile' component={UserProfile} />
                <Route  path='/home' component={Home} />
                <Route  path='/emailnotverified' component={EmailNotVerified} />
                <Route  path='/register' component={RegisterAs} />
                <Route  path='/dashboard' component={Dashboard} />
            </Router>
        )
    }
}

export default BasicRouter