import React, { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppNavbar from './components/layout/AppNavbar';
import Footer from './components/layout/Footer';
import Landing from './components/pages/landing';
import Routes from './components/routing/Routes'
function App() {
  return (
    <Router>
    <Fragment >
      <AppNavbar />
      <Switch>
        <Route exact path = '/' component = {Landing} />
        <Route component = { Routes } />
      </Switch>
      <Footer />
    </Fragment>
    </Router>
  );
}

export default App;
