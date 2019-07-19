import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home-hero">

        <div className="justify-content-center align-items-center">
          <h1>Welcome to TravelMate</h1>
          <h4>Look for new friends to join your trip </h4>
          <Link to='/signup' className='btn btn-primary'>
            HERE         
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      
    </div>
  )
}

export default Homepage