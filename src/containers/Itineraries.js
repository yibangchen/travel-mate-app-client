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

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.props.fetchItineraries();
  }

  handleRemove = e => {
    e.preventDefault();
  }

  render(){
    const { itineraries } = this.props;
    let tripList = itineraries.map((trip, ind) =>
        <ItineraryBlock tripDetail={ trip } tripNum={ ind+1 } removeFn={this.handleRemove} /> );

    return (
      <div className="container-fluid container itineraries">
        { tripList }
        <ItineraryForm showFlag={ !tripList.length } />        
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

