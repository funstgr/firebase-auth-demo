// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { Router, Switch, Route } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import Navbar from './components/navigation/Navbar';
import Dashboard from './components/Dashboard';
import RestaurantDetails from './components/restaurants/RestaurantDetails';
import SignIn from './components/auth/Signin';
import SignUp from './components/auth/Signup';
import AdminSignUp from './components/auth/AdminSignup';
import CreateRestaurant from './components/restaurants/CreateRestaurant';
import AddReview from './components/reviews/AddReview';
import UserList from './components/users/UserList';
import AdminUpdateUser from './components/admin/AdminUpdateUser';

import history from './history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/restaurant/:id' component={RestaurantDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/admin_signup' component={AdminSignUp} />
            <Route path='/create' component={CreateRestaurant} />
            <Route path='/manage_users' component={UserList} />
            <Route path='/update_user/:id' component={AdminUpdateUser} />
            <Route exact path='/addreview/:id' component={AddReview}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
