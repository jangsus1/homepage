import {
    createStore, combineReducers, applyMiddleware, compose,
  } from 'redux';
  import thunk from 'redux-thunk';
  import MenuReducer from './reducers/MenuReducer'
  const rootReducer = combineReducers({
    mn : MenuReducer
  });
  
  const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : (f) => f));
  
  export default store;