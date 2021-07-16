import React, { useEffect } from 'react';
import Nav from './components/Nav';
import HomePage from './containers/HomePage';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Redirect from="*" to={ "/" }/>
      </Switch>
    </div>
  );
};

export default App;
