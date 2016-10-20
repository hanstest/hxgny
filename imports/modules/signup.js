import { browserHistory } from 'react-router'
import { Accounts } from 'meteor/accounts-base'

const getUserData = (options) => {
  let user = {}
  Object.assign(user, options)

  let students = []
  if (options.fatherAsStudent) {
    students.push({
      firstName: options.fatherFirstName,
      lastName: options.fatherLastName,
      chineseName: options.fatherChineseName,
    })
  }
  if (options.motherAsStudent) {
    students.push({
      firstName: options.motherFirstName,
      lastName: options.motherLastName,
      chineseName: options.motherChineseName,
    })
  }
  user.students = students

  return user
}

const signup = (options) => {
  const user = getUserData(options);

  Accounts.createUser(user, (error) => {
    if (error) {
      // TODO Properly handle the error
      console.log('Error: ' + error.reason)
    } else {
      browserHistory.push('/account')
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
