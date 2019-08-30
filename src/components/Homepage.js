import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route, withRouter, Redirect } from 'react-router';

const Homepage = ({ currentUser }) => {
  return (
    <div className="home-hero">

      <div className="justify-content-center align-items-center">
        <h1>Welcome to TravelMate</h1>
        <h4>Look for new friends to join your trip </h4>
        <Link to='/login' className='btn btn-primary'>
          HERE         
        </Link>
      </div>
    </div>
  );
}

export default withRouter(Homepage);