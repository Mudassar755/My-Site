import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppNavbar from './components/layout/AppNavbar';
import Footer from './components/layout/Footer';
import Landing from './components/pages/landing/Landing';
import About from './components/pages/About';
// import Services from './components/pages/Services';
import Blog from './components/pages/Blog';
import Contact from './components/pages/contact/Contact';
function App() {
  return (
    <Router>
    <div >
      <AppNavbar />
      <Switch>
        <Route exact path = '/' component = {Landing} />
        <Route exact path = '/about' component = {About} />
        {/* <Route exact path = '/services' component = {Services} /> */}
        <Route exact path = '/blog' component = {Blog} />
        <Route exact path = '/contact' component = {Contact} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
