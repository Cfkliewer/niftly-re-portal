import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import AgentDashboard from './components/agent-dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', paddingTop: '5em'}}>
              <Login />
            </div>
          </Route>
          <Route path="/dashboard">
            <AgentDashboard />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
