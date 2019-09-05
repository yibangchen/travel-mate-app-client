import React from 'react';
import { connect } from 'react-redux';

class ItineraryPage extends React.Component {

  constructor(props) {    
    super(props);
    this.state = {
    }
  }

  componentDidMount() {

  }

  render(){
    return (
      <div>
        {(this.props.itinerary) ? this.props.itinerary.destination : 'null'}
      </div>
    );
  }

}


function mapStateToProps(state, ownProps) {
  const { tripId } = ownProps.match.params;
  return {
    itinerary: state.itineraries[tripId-1]
  }
}

export default connect(mapStateToProps, {  })( ItineraryPage );

