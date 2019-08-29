import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { authUser } from '../store/actions/auth';

const ItineraryBlock = props => {
  const { currentUser, authUser, tripDetail, tripNum } = props;

  return (
    <div className="container-fluid main">
      <h3>Trip {tripNum}:</h3>
      <div>{tripDetail.location}, {tripDetail.arrive}</div>
    </div>
  );
}

function mapStateTopProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  }
}

export default withRouter( connect(mapStateTopProps, { authUser })(ItineraryBlock));