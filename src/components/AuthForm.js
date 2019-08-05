import React, { Component } from 'react';
import FormItem from './templates/FormItem';

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
    const { onAuth, history } = this.props;
    const authType = this.state.hasAccount ? 'signin': 'signup';

    onAuth(authType, this.state)
      .then(() => {
        history.push('/');
      })
      .catch(err => {return err;})
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
                <FormItem text='First Name' name='firstname' changeFn={this.handleChange} />
                <FormItem text='Last Name' name='lastname' changeFn={this.handleChange} />
              </div>
            }
            <FormItem text='Email' name='email' changeFn={this.handleChange} id="email"/>
            <FormItem text='Password' name='password' changeFn={this.handleChange} id='password' type='password'/>
            { !hasAccount && 
              <div className="signUp">
                <FormItem text='Profile Image' changeFn={this.handleChange} id='image-url' name='profileImageUrl' type='image-url'/>
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