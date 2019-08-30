import React, { Component } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';

class Navbar extends Component {

  logout = e => {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        
        <Link to='/' className="navbar-brand">TravelMate</Link>
        <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navigation">

          <ul className="navbar-nav">

            <li className="nav-item">
              <Link to={'/itineraries'} className="nav-link">Trips</Link>
            </li>
            
            <li className="nav-item">
              <Link to='/' className="nav-link">Inspire</Link>
            </li>
          </ul>

        </div>

        <div className="nav navbar-nav navbar-right collapse navbar-collapse" id="user-auth">
          { currentUser.isAuthenticated ? (
            <ul className="navbar-nav">
              <li className="navbar-nav">
                <Link to='/' className="nav-link">Messages</Link>
              </li>
              <li className="navbar-nav">
                <a onClick={this.logout} className="nav-link">Log Out</a>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className="navbar-nav">
                <Link to='/login' className="nav-link">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>

    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser:state.currentUser
  }
}

export default connect(mapStateToProps, { logout })(Navbar)