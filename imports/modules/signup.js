import { browserHistory } from 'react-router'
import { Accounts } from 'meteor/accounts-base'

/**
 * Create a user
 * @param userInfo Information about the user
 * @param userInfo.fatherAsStudent indicator whether the father is a student
 * @param userInfo.fatherFirstName the first name of the father
 * @param userInfo.fatherLastName the last name of the father
 * @param userInfo.fatherChineseName the Chinese name of the father
 * @param userInfo.motherAsStudent indicator whether the mother is a student
 * @param userInfo.motherFirstName the first name of the mother
 * @param userInfo.motherLastName the last name of the mother
 * @param userInfo.motherChineseName the Chinese name of the mother
 */
const getUserData = (userInfo) => {
  const user = {}
  Object.assign(user, userInfo)

  const students = []
  if (userInfo.fatherAsStudent) {
    students.push({
      firstName: userInfo.fatherFirstName,
      lastName: userInfo.fatherLastName,
      chineseName: userInfo.fatherChineseName,
    })
  }
  if (userInfo.motherAsStudent) {
    students.push({
      firstName: userInfo.motherFirstName,
      lastName: userInfo.motherLastName,
      chineseName: userInfo.motherChineseName,
    })
  }
  user.students = students

  return user
}

const signup = (options) => {
  const user = getUserData(options)

  Accounts.createUser(user, (error) => {
    if (error) {
      // TODO Properly handle the error
      // console.log('Error: ' + error.reason)
    } else {
      browserHistory.push('/account')
      // TODO Update the confirmation
      // console.log('Successfully create a user!')
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
