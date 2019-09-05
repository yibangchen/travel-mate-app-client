import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import Itineraries from './Itineraries';
import ItineraryPage from '../components/ItineraryPage';
import NotFound from './NotFound';
import { authUser } from '../store/actions/auth';
import './main.css';

const Main = props => {
  const { currentUser, authUser } = props;
  return (
    <div className="container-fluid main">
      <Switch>
        <Route exact path='/'
          render={ props =>
            <Homepage currentUser={ currentUser } />
          }
        />

        <Route path='/login'
          render={ props =>
            <AuthForm onAuth={ authUser } {...props} />
          }
        />

        <Route 
          path='/itineraries/:tripId'
          component={ ItineraryPage }
        />

        <Route path='/itineraries'
          render={ props =>
            <Itineraries currentUser={ currentUser } />
          }
        />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function mapStateTopProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  }
}

export default withRouter( connect(mapStateTopProps, { authUser })(Main));