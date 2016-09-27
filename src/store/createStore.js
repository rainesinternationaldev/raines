import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import {responsiveStoreEnhancer} from 'redux-responsive'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk'
import makeRootReducer from './reducers'

export default (initialState = {}, history) => {

  const logger = createLogger({ predicate });

  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk, logger, routerMiddleware(history)]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  if (__DEBUG__) {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      responsiveStoreEnhancer,
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers)
    })
  }

  return store
}

/**
 * Disable logging for specific actions,
 * and disable ALL logging in production.
 */
function predicate(getState, action) {
	const actionsToIgnore = [];
	const omitLogger 			= actionsToIgnore.reduce((prev, curr) => {
		return ignoreAction(action, prev) && ignoreAction(action, curr);
	}, true);
	return omitLogger && (window.__ENV__ !== `production`);
}

function ignoreAction(actionObj, actionType) {
	return (actionObj.type !== actionType);
}