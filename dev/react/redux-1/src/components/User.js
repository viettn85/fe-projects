import React from 'react';

export const User = (props) => {
  {
    console.log('Reload');
  }
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h1>The User Page</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12">
          <p>
            Username: {props.username}, {props.userage}
          </p>
        </div>
      </div>
    </div>
  );
};
