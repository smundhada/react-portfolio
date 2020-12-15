import React from 'react';
import home from './compontents/home';
import NavBar from './compontents/navbar';
import Footer from './compontents/footer';
import portfolio from './compontents/portfolio';
import contact from './compontents/contact';
import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div class="">
          <Route exact path= {["/", "/about", "/react-portfolio"]} component={home} />
          <Route exact path="/portfolio"  component={portfolio} />
          <Route exact path="/contact"  component={contact} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
