import React from 'react';
import { connect } from 'react-redux';

class ItineraryPage extends React.Component {

  constructor(props) {    
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    // this.props.fetchItineraries();
  }

  render(){
    return (
      <div>A trip</div>
    );
  }

}


function mapStateTopProps(state) {
  return {
    itineraries: state.itineraries
  }
}

export default connect(mapStateTopProps, {  })( ItineraryPage );

