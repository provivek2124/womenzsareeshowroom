import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './Pages/homepage/homepage.component';

const HatsPage = () =>(
  <div>
    <h1>hats page</h1>
  </div>
)
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/hats' component={HatsPage}/>
    </div>
  );
}

export default App;
