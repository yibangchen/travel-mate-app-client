import React from 'react';

const NotFound = props => {

  return (
    <div className="container-fluid not-found">
      <h3>404 Not Found</h3>
      <p>{props.message}</p>
    </div>
  );
}

export default NotFound;