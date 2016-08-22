import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import wordpress from './wordpress';
import signup from './signup';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    wordpress,
    signup,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
