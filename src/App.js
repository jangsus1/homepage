import React from 'react';
import {
  Route, Redirect, Switch,
} from 'react-router-dom';
import MainPage from './containers/MainPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/homepage' exact component = {MainPage}/>
        <Redirect exact from = '/' to = '/homepage' />
      </Switch>
    </div>
  );
}

export default App;
