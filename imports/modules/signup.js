import { browserHistory } from 'react-router'
import { Accounts } from 'meteor/accounts-base'

const getUserData = (options) => ({
  email: options.email,
  password: options.password,

  // TODO Update other info
  profile: {
    name: {
      first: options.firstName,
      last: options.lastName,
      chinese: options.chineseName,
    },
  },
})

const signUp = (options) => {
  const user = getUserData(options);

  Accounts.createUser(user, (error) => {
    if (error) {
      // TODO Properly handle the error
      alert(error.reason)
    } else {
      browserHistory.push('/')
      // TODO Update the confirmation
      console.log('Successfully create a user!')
    }
  })
}

const validate = (options) => {
  // TODO
}

const handleSignup = (options) => {
  validate(options)
  signup(options)
}

export default handleSignup
