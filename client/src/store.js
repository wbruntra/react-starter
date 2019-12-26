import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const store = createStore(
  combineReducers({ ...reducers }),
  composeWithDevTools(applyMiddleware(reduxThunk)),
);

store.subscribe(()=>{
  console.log('new client state', store.getState());
});

export default store;
