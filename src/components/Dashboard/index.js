import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import RestaurantList from '../restaurants/RestaurantList';
import { deleteRestaurant } from '../../store/actions/restaurantActions';


class Dashboard extends Component {
  componentDidMount() {
    const { getRestaurants } = this.props;
  }

  getRestaurant = id => (e) => {
    const { history } = this.props;
    e.preventDefault();
    history.push(`/restaurant/${id}`);
  }

  deleteRestaurant = id => (e) => {
    const { removeRestaurant } = this.props;
    e.preventDefault();
    removeRestaurant(id);
  }

  render() {
    const {
      auth, restaurants, profile, reviews,
    } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12">
            <RestaurantList
              restaurants={restaurants}
              getRestaurant={id => this.getRestaurant(id)}
              deleteRestaurant={id => this.deleteRestaurant(id)}
              profile={profile}
              reviews={reviews}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.firestore.ordered.restaurants,
  reviews: state.firestore.ordered.reviews,
  auth: state.firebase.auth,
  profile: state.firebase.profile,
});

const mapDispatchToProps = dispatch => ({
  removeRestaurant: (id) => { dispatch(deleteRestaurant(id)); },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'restaurants', orderBy: ['rating', 'desc'] },
    { collection: 'reviews', orderBy: ['rating', 'desc'] },
  ]),
)(Dashboard);
