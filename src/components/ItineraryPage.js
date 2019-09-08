import React from 'react';
import { connect } from 'react-redux';
import { fetchItineraries } from '../store/actions/itinerary';
import NotFound from '../containers/NotFound';
import ItineraryBlock from './ItineraryBlock';
import RequirementForm from './forms/RequirementForm';
import MessageList from '../containers/MessageList';

class ItineraryPage extends React.Component {

  constructor(props) {    
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    if (!this.props.itinerary)
      this.props.fetchItineraries();
  }

  render(){
    const errorMessage = 'Cannot locate itinerary';
    if (! this.props.itinerary)
      return <NotFound message={errorMessage} />

    return (      
      <div>
        <ItineraryBlock 
          tripDetail={this.props.itinerary} 
          tripNum={this.props.match.params}
        />
        <RequirementForm />
        <MessageList/>
      </div>
    );
  }

}


function mapStateToProps(state, ownProps) {
  const { tripId } = ownProps.match.params;

  return {
    itinerary: state.itineraries.length>tripId ? state.itineraries[tripId-1] : null
  }
}

export default connect(mapStateToProps, { fetchItineraries })( ItineraryPage );

