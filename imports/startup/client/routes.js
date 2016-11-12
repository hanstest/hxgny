import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'
import App from '../../ui/layouts/app'
import Index from '../../ui/pages/index'

import Login from '../../ui/pages/login'
import Signup from '../../ui/containers/signup'
import Account from '../../ui/pages/account'

// import { NotFound } from '../../ui/pages/not-found';
// import { RecoverPassword } from '../../ui/pages/recover-password';
// import { ResetPassword } from '../../ui/pages/reset-password';


const requireAuth = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    })
  }
}

Meteor.startup(() => {
  Meteor.subscribe('users')
  
  render(
    <Router history={ browserHistory }>
      <Route path='/' component={ App }>
        <IndexRoute name='index' component={ Index } />
        <Route name='login' path='/login' component={ Login } />
        <Route name='signup' path='/signup' component={ Signup } />
        <Route name='account' path='/account' component={ Account } onEnter={ requireAuth } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  )
})
