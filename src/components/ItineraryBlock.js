import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { authUser } from '../store/actions/auth';

const ItineraryBlock = props => {
  const { currentUser, authUser, tripDetail, tripNum } = props;
  const colors = ['grey','paleturquoise','lavender','lightgreen', 'deepskyblue'];
  const style = {
    backgroundColor: colors[props.tripNum % colors.length]
  };

  // set background image for itinerary-block
  return (
    <div className="container-fluid itinerary-block flex-item container" style={ style }>
      <Link to={`/itineraries/${props.tripNum}`}>
        <h3 className='button'>
          {tripDetail.destination}
        </h3>        
      </Link>
      <div>{tripDetail.arrive} - {tripDetail.depart}</div>
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