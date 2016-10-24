import { browserHistory } from 'react-router'
import { Accounts } from 'meteor/accounts-base'

/**
 * Create a user
 * @param userInfo Information about the user
 * @param userInfo.email email address as the log in user name
 * @param userInfo.password login password
 * @param userInfo.fatherAsStudent indicator whether the father is a student
 * @param userInfo.fatherFirstName the first name of the father
 * @param userInfo.fatherLastName the last name of the father
 * @param userInfo.fatherChineseName the Chinese name of the father
 * @param userInfo.motherAsStudent indicator whether the mother is a student
 * @param userInfo.motherFirstName the first name of the mother
 * @param userInfo.motherLastName the last name of the mother
 * @param userInfo.motherChineseName the Chinese name of the mother
 * @param userInfo.contact indicate who is the main contact
 * @param userInfo.street street name
 * @param userInfo.city city name
 * @param userInfo.state state name
 * @param userInfo.zipcode state name
 */
const getUserData = (userInfo) => {
  const user = {}
  
  user.email = userInfo.email
  user.password = userInfo.password
  
  const profile = { name: {}, father: {}, mother: {} }
  if (userInfo.contact === 'father') {
    profile.name.first = userInfo.fatherFirstName
    profile.name.last = userInfo.fatherLastName
    profile.name.chinese = userInfo.fatherChineseName
  } else {
    profile.name.first = userInfo.motherFirstName
    profile.name.last = userInfo.motherLastName
    profile.name.chinese = userInfo.motherChineseName
  }
  profile.father.first = userInfo.fatherFirstName
  profile.father.last = userInfo.fatherLastName
  profile.father.chinese = userInfo.fatherChineseName
  profile.mother.first = userInfo.motherFirstName
  profile.mother.last = userInfo.motherLastName
  profile.mother.chinese = userInfo.motherChineseName
  user.profile = profile

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
  
  user.profile.address = {
    street: userInfo.street,
    city: userInfo.city,
    state: userInfo.state,
    zipcode: userInfo.zipcode,
  }
  
  user.roles = ['user']
  
  console.log(user)
  return user
}

const signup = (options) => {
  const user = getUserData(options)

  Accounts.createUser(user, (error) => {
    if (error) {
      // TODO Properly handle the error
      // console.log('Error: ' + error.reason)
    } else {
      browserHistory.push('/')
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
