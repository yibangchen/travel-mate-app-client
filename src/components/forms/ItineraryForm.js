import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormItem from '../templates/FormItem';
import DateRange from '../templates/DateRange';
import { addNewItinerary } from '../../store/actions/itinerary'

class ItineraryForm extends Component {

  constructor( props ) {
    super(props);
    this.state = {
      openForm: this.props.showFlag,
      isFormComplete: true,
      tripDetails: {       
        destination: '',
        arrive: '',
        depart: ''
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();    
    if (this.state.isFormComplete) {
      this.props.dispatch( addNewItinerary( this.state.tripDetails ) );
      this.handleOpenForm();
    } else {
      // highlight imcomplete part of form
    }
  }

  handleInputChange = e => {
    this.setState({
      tripDetails: {
        ...this.state.tripDetails,
        [e.target.name]: e.target.value
      }
    });
  }

  handleDateChange = (arrive, depart) => {
    this.setState( {
      tripDetails: {
        ...this.state.tripDetails,
        arrive, 
        depart
      }
    });
  }

  handleOpenForm = () => {
    this.setState({
      openForm: !this.state.openForm
    });
  }

  showStyle = flag => flag? {} : { display: 'none' };

  render() {
    const { errors } = this.props;
    const buttonText = '+ New Trip',
          heading = 'Destination',
          submitText = 'Submit';
 
    return (
      <div className="row flex-item container itinerary-form">
        <h2 
          style={ this.showStyle(this.state.openForm) }
          onClick={ this.handleOpenForm }
          className='button'
        >{buttonText}</h2>

        <form onSubmit={this.handleSubmit} style={ this.showStyle(!this.state.openForm) }>
          <h2>{heading}</h2>

          { errors && errors.message &&
            <div className="alert alert-danger">
              {errors.message}
            </div>
          }

          <FormItem text='Destination' name='destination' changeFn={this.handleInputChange} />
          <DateRange changeFn={this.handleDateChange}/>
          <button className="btn btn-primary btn-block btn-lg" type='submit'>
            {submitText}
          </button>
        </form>
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



