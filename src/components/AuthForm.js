import React, { Component } from 'react';
import FormItem from './templates/FormItem';
// import { handleInputChange } from '../services/helpers';

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

  handleSubmit = e => {
    e.preventDefault();
    const { onAuth, history } = this.props;
    const authType = this.state.hasAccount ? 'signin': 'signup';
    onAuth(authType, this.state)
      .then(() => {
        this.resetForm();
        history.push('/');
      })
      .catch(err => {return err;})
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  resetForm = () => {
    this.setState({ 
      email: '',
      username: '',
      firstname: '',
      lastname: '',
      profileImageUrl: '',
      password: '' 
    });
  }

  changeLogin = () => {
    this.setState({ hasAccount: !this.state.hasAccount });
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

            { !hasAccount && 
              <div className="signUp">
                <FormItem text='First Name' name='firstname' changeFn={this.handleInputChange} />
                <FormItem text='Last Name' name='lastname' changeFn={this.handleInputChange} />
              </div>
            }
            <FormItem text='Email' name='email' changeFn={this.handleInputChange} id="email"/>
            <FormItem text='Password' name='password' changeFn={this.handleInputChange} id='password' type='password'/>
            { !hasAccount && 
              <div className="signUp">
                <FormItem text='Profile Image' changeFn={this.handleInputChange} id='image-url' name='profileImageUrl' type='image-url'/>
              </div>
            }

            <button className="btn btn-primary btn-block btn-lg" type='submit'>
              { hasAccount ? text.button.LOGIN : text.button.SIGNUP }
            </button>
          </form>
          <div>
            <p className="link-text switch-auth" onClick={ this.changeLogin }>
              { hasAccount ? text.anchor.LOGIN : text.anchor.SIGNUP }
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthForm;