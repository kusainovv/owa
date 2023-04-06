import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Auth } from './processes/Auth';
import { MainLayout } from './shared/layout/MainLayout';
import { Reports } from './pages/reports/page';

function App() {
  if (!(localStorage.getItem('clientId') && localStorage.getItem('password'))) {
    return <Auth />
  }
  
  return (
    <Router>
      <MainLayout content={
        <Switch>

          <Route path='/reports'>
            <Reports />
          </Route>

          <Route exact path='/'>
            test
          </Route>

          <h1>not found</h1>
        </Switch>
      } />
    </Router>
  );
}

export default App;
