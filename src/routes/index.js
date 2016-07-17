// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home';
import Signup from './Signup';
import {ThankYou} from './Signup/ThankYou';
import {WhoWeAre} from './WhoWeAre';
import IdeasAndInsights from './IdeasAndInsights';
import Topic  from './IdeasAndInsights/Topic';

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    {
      path: 'signup',
      component: Signup
    },
    {
      path: 'thank-you',
      component: ThankYou
    },
    {
      path: 'who-we-are',
      component: WhoWeAre
    },
    {
      path: 'ideas-and-insights',
      component: IdeasAndInsights,
    },
    {
      path: 'ideas-and-insights/:topic',
      components: Topic
    }
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
