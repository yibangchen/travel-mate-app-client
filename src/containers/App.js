import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';
// if (localStorage.jwtToken) {}

const App = () => (
  <Provider>
    <Router>
      <div className="onboarding">
        <Navbar />
        <Main />
      </div>
    </Router>
  </Provider>
)

export default App;