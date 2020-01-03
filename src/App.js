import React from 'react';
import {
  Route, Redirect, Switch,
} from 'react-router-dom';
import MainPage from './containers/MainPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/main' exact component = {MainPage}/>
        <Redirect exact from='/' to = '/main' />
      </Switch>
    </div>
  );
}

export default App;
