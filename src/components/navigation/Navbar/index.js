import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import setLocation from '../../../store/actions/locationActions';
import SignedInLinks from '../SignedInLinks';
import SignedOutLinks from '../SignedOutLinks';
import HomeLink from '../HomeLink';
import history from '../../../history';
import './navbar.css';

class Navbar extends React.Component {
  componentDidMount() {
    this.setLocation('');
  }

  updateLocation = loc => (e) => {
    e.preventDefault();
    if (loc === 'signin') {
      loc = 'signup';
    } else if (loc === 'signup') {
      loc = 'signin';
    }
    this.setLocation(loc);
  }

  setLocation(location) {
    const { postLocation } = this.props;
    if (location === '') {
      location = 'signin';
    }
    postLocation(location);
  }

  getLocation() {
    const url = window.location.href;
    const subUrlIndex = url.lastIndexOf('/') + 1;
    const location = url.substr(subUrlIndex);
    return location;
  }

  onHomeClick = loc => (e) => {
    e.preventDefault();
    this.setLocation('');
    history.push('/');
    // window.location.reload();
  }

  render() {
    const { auth, profile, location } = this.props;
    const links = auth.uid ? <SignedInLinks setLocation={this.updateLocation} profile={profile} />
      : <SignedOutLinks onClick={loc => this.updateLocation(loc)} location={location.location.data} />;

    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <HomeLink onClick={loc => this.onHomeClick(loc)} location={location.location.data}/>
          {links}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    location,
  } = state;
  return {
    location,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = dispatch => ({
  postLocation: (location) => { dispatch(setLocation(location)); },
});


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
