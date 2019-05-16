import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='./login' component={Login} />
        </div>
      </Router>
      
    );
  }
  
}

export default App;
