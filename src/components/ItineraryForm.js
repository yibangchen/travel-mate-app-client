import React, { Component } from 'react';
// import { handleInputChange } from '../services/helpers';
import { connect } from 'react-redux';
import FormItem from './templates/FormItem';
import DateRange from './templates/DateRange';
import { addNewItinerary } from '../store/actions/itinerary'


class ItineraryForm extends Component {

  constructor( props ) {
    super(props);

    this.state = {      
      destination: '',
      arrive: '',
      depart: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { destination, arrive, depart } = this.state;
    if (destination.length && arrive.length && depart.length) {
      this.props.dispatch( addNewItinerary({ destination, arrive, depart }) );   
    }
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleDateChange = (arrive, depart) => {
    this.setState({ arrive, depart });
  }

  render() {
    const { errors } = this.props;
    const heading = 'Where are you going?',
          buttonText = 'Submit';
    return (
      <div className="row justify-content-md-center text-center">
        <div className="col-md-6">
          <form onSubmit={this.handleSubmit}>
            <h2>{heading}</h2>

            { errors && errors.message &&
              <div className="alert alert-danger">
                {errors.message}
              </div>
            }

            <FormItem text='Destination' name='destination' changeFn={this.handleInputChange} />
            <DateRange changeFn={this.handleDateChange}/>
            <button className="btn btn-primary btn-block btn-lg" type='submit'>
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateTopProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => ({
   addNewItinerary,
   dispatch
})

export default connect( mapStateTopProps, mapDispatchToProps )(ItineraryForm);



