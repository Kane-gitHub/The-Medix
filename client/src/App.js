// REACT IMPORTS
// CSS
// BOOTSTRAP
// LANDING
// LOGIN
// SIGNUP

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Landing from './Components/Landing';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import './Components/Styles.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container id='main-container'>
        <Route exact={true} path='/' render={() => (
          <>
            <Landing />
          </>
        )} />
        <Route exact={true} path='/login' render={() => (
          <>
            <Login />
          </>
        )} />
        <Route exact={true} path='/signup' render={() => (
          <>
            <SignUp />
          </>
        )} />
      </Container>
    </Router>
  );
}

export default App;
