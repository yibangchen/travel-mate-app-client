import React, { Component } from 'react';

class AuthForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      firstname: '',
      lastname: '',
      profileImageUrl: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
  }

  render() {
    const { email } = this.state;
    const { heading, errors } = this.props;
    const buttonText = 'Submit';
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

            <label htmlFor="email">Email:</label>
            <input type="text" className="form-control" id="email" name='email' type='text'
              onChange={this.handleChange} value={email}
            />

            <label htmlFor='password'>Password:</label>
            <input className='form-control' id='password' name='password' type='password'
              onChange={this.handleChange}
            />

            <button className="btn btn-primary btn-block btn-lg" type='submit'>
              {buttonText}
            </button>

          </form>
        </div>
      </div>
    );
  }
}

export default AuthForm;