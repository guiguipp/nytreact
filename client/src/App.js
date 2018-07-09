
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';
// import logo from './logo.svg';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="*" component={Home} />
    </div>
  </Router>
);

export default App;