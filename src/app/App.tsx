import React from 'react';
import './App.css';
import { Auth } from '../processes/Auth';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainLayout } from '../shared/layout/MainLayout';
import { Routing } from '../processes/Routing';

function App() {
  if (!(localStorage.getItem('clientId') && localStorage.getItem('password'))) {
    return <Auth />
  }
  
  return (
    <Router>
      <MainLayout content={<Routing />} />
    </Router>
  );
}

export default App;
