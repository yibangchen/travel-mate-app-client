import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';

const Main = props => {
  const { currentUser } = props;
  return (
    <div className="container-fluid main">
      <Route
        exact path='/'
        render={ props =>
          <Homepage currentUser={ currentUser } />
        }
      />

      <Route
        exact path='/login'
        render={ props =>
          <AuthForm />
        }
      />

    </div>
  );
}

function mapStateTopProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  }
}

export default withRouter( connect(mapStateTopProps, { })(Main));