import React from 'react';
import { connect } from 'react-redux';
import FormItem from '../templates/FormItem';

class RequirementForm extends React.Component {

  constructor(props) {    
    super(props);
    this.state = {
      openForm : false
    }
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  handleSubmit = e => {
    e.preventDefault();
  }

  componentDidMount() {
  }

  showStyle = flag => flag? {} : { display: 'none' };

  render(){
    const heading = 'Who would you expect?',
          submitText = 'Submit';
    const { errors } = this.props;
  
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={ this.showStyle(!this.state.openForm) }>
          <h2>{heading}</h2>

          { errors && errors.message &&
            <div className="alert alert-danger">
              {errors.message}
            </div>
          }

          <FormItem text='Destination' name='destination' changeFn={this.handleInputChange} />
          <button className="btn btn-primary btn-block btn-lg" type='submit'>
            {submitText}
          </button>
        </form>
      </div>
    );
  }

}

function mapStateToProps(state, ownProps) {
  return {
  }
}

export default connect(mapStateToProps, {  })( RequirementForm );

