import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import wordpress from './wordpress';
import signup from './signup';
import {responsiveStateReducer} from 'redux-responsive'
import {createResponsiveStateReducer} from 'redux-responsive'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    wordpress,
    signup,
    ...asyncReducers,
    browser: createResponsiveStateReducer({
      extraSmall: 480,
      small: 768,
      medium: 992,
      large: 1200,
      extraLarge: 1400,
      massive: 2000
    })
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
