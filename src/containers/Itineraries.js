import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { authUser } from '../store/actions/auth';
import ItineraryBlock from '../components/ItineraryBlock';
import ItineraryForm from '../components/ItineraryForm';
import { fetchItineraries } from '../store/actions/itinerary'

/*
  /     display all trips
  /new  create a new trip
*/

class Itineraries extends React.Component {

  componentDidMount() {
    this.props.fetchItineraries();
  }

  render(){
    const { itineraries } = this.props;
    let tripList = itineraries.map((trip, ind) =>
        <ItineraryBlock tripDetail={ trip } tripNum={ ind+1 } /> );

    return (
      <div className="container-fluid main">
        { tripList }
        <ItineraryForm />
      </div>
    );
  }
}

function mapStateTopProps(state) {
  return {
    itineraries: state.itineraries
  }
}

export default withRouter( connect(mapStateTopProps, { fetchItineraries })(Itineraries));

