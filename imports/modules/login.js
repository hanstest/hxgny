import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor'

const login = (options) => {
  const email = options.email
  const password = options.password
  // console.log(email)
  // console.log(password)

  Meteor.loginWithPassword(email, password, (error) => {
    if (error) {
      alert(error.reason)
    } else {
      browserHistory.push('/account')
    }
  })
}

const validate = (options) => {
  // TODO Validate email and password
}

const handleLogin = (options) => {
  validate(options)
  login(options)
}

export default handleLogin
