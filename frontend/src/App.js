import React from 'react';
import {
  Route, Redirect, Switch,
} from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage';
import BlogMainPage from './containers/BlogMainPage/BlogMainPage'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path='/homepage' exact component = {MainPage}/>
        <Route path='/homepage/blog' exact component = {BlogMainPage}/>
        <Redirect exact from = '/' to = '/homepage' />
      </Switch>
    </div>
  );
}

export default App;
