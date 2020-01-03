import {
    createStore, combineReducers, applyMiddleware, compose,
  } from 'redux';
  import thunk from 'redux-thunk';
  const rootReducer = combineReducers({
  });
  
  const logger = () => (next) => (action) => {
    // console.log('[Middleware] Dispatching', action);
    const result = next(action);
    // console.log('[Middleware] Next State', store.getState());
    return result;
  };
  
  const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk), window.devToolsExtension ? window.devToolsExtension() : (f) => f));
  
  export default store;