import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {

  render() {
    const { currentUser } = this.props;
    return (

    );
  }
}

function mapStateToProps(state) {
  return {
    state.currentUser
  }
}

export default connect(mapStateToProps, { })(Navbar)