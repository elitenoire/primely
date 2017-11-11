import React from 'react';
import { withRouter } from 'react-router-dom'
import Router from '../routes'


const App = (props) => {
  return (
    <div>
      <Router {...props} />
    </div>
  );
}

export default withRouter(App);
