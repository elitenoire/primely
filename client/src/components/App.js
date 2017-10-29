import React from 'react';
import Router from '../routes'
import { Container } from 'semantic-ui-react'

// TODO : Fix styling at smaller screens - remove Container ??
const App = (props) => {
  console.log('App props ', props)
  console.log('App location props ', props.location || '')
  return (
    <Container fluid>
      <Router />
    </Container>
  );
}

export default App;
