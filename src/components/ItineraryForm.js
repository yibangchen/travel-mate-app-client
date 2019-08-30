import React, { Component } from 'react';
import { handleInputChange } from '../services/helpers';
import FormItem from './templates/FormItem';

class ItineraryForm extends Component {

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

            <button className="btn btn-primary btn-block btn-lg" type='submit'>
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ItineraryForm;