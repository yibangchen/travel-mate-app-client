import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Navbar extends Component {

  render() {
    // const { currentUser } = this.props;
    return (
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <a class="navbar-brand" href="#">TravelMate</a>
        <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main-navigation">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Plan</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Message</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Inspire</a>
            </li>
          </ul>
        </div>
        <div className="nav navbar-nav navbar-right collapse navbar-collapse" id="user-auth">
          <ul className="navbar-nav">
            <li className="navbar-nav">
              <Link to='/login' className="nav-link">Login</Link>
            </li>
          </ul>
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

export default connect(mapStateToProps, { })(Navbar)