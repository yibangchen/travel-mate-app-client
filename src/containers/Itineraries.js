import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { authUser } from '../store/actions/auth';
import ItineraryBlock from '../components/ItineraryBlock';

/*
  /     display all trips
  /new  create a new trip
*/

localStorage.setItem('itineraries', JSON.stringify([
  {
    place: 'London',
    arrive: '9/1/2019',
    depart: '9/3/2019'
  }, {
    place: 'Paris',
    arrive: '9/4/2019',
    depart: '9/7/2019'
  }, {
    place: 'Dubai',
    arrive: '9/8/2019',
    depart: '9/9/2019'
  }
])); 

const Itineraries = props => {
  const { currentUser, authUser } = props;

  return (
    <div className="container-fluid main">
      <div>Trips: </div>
      {
      /*

        [...JSON.parse(localStorage.itineraries)].length
        .map((trip, ind) =>
        <ItineraryBlock tripDetail={ trip } tripNum={ ind+1 } />
      )
      */
      }
    </div>
  );
}

function mapStateTopProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  }
}

export default withRouter( connect(mapStateTopProps, { authUser })(Itineraries));