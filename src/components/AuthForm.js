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
      password: '',
      hasAccount: true
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
    const { email, hasAccount } = this.state;
    const { heading, errors } = this.props;    
    const text = {
      button: {
        SIGNUP: 'Sign Up',
        LOGIN: 'Log In'
      }
      ,anchor: {
        SIGNUP: "Already signed up? Click to log in",
        LOGIN: "Don't have account? Click to sign up"
      }
    };

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
              { hasAccount ? text.button.LOGIN : text.button.SIGNUP }
            </button>
          </form>
          <div>
            <p className="link-text switch-auth">
              { hasAccount ? text.anchor.LOGIN : text.anchor.SIGNUP }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthForm;