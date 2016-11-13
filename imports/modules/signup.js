import { browserHistory } from 'react-router'
import { Accounts } from 'meteor/accounts-base'

/**
 * Create a user
 * @param userInfo Information about the user
 * @param userInfo.email email address as the log in user name
 * @param userInfo.password login password
 * @param userInfo.fatherFirstName the first name of the father
 * @param userInfo.fatherLastName the last name of the father
 * @param userInfo.fatherChineseName the Chinese name of the father
 * @param userInfo.fatherEmail the email address of the father
 * @param userInfo.fatherMobile the mobile number of the father
 * @param userInfo.motherFirstName the first name of the mother
 * @param userInfo.motherLastName the last name of the mother
 * @param userInfo.motherChineseName the Chinese name of the mother
 * @param userInfo.motherEmail the email address of the mother
 * @param userInfo.motherMobile the mobile number of the mother
 * @param userInfo.contact the main contact of the user account
 * @param userInfo.street street name
 * @param userInfo.city city name
 * @param userInfo.state state name
 * @param userInfo.zip state name
 */
const getUserData = (userInfo) => {
  const user = {}
  
  user.email = userInfo.email
  user.password = userInfo.password
  
  const profile = {
    name: {
      father: {},
      mother: {},
    },
    address: {},
    contact: userInfo.contact,
  }
  profile.name.father.first = userInfo.fatherFirstName
  profile.name.father.last = userInfo.fatherLastName
  profile.name.father.chinese = userInfo.fatherChineseName
  profile.name.father.email = userInfo.fatherEmail
  profile.name.father.mobile = userInfo.fatherMobile
  
  profile.name.mother.first = userInfo.motherFirstName
  profile.name.mother.last = userInfo.motherLastName
  profile.name.mother.chinese = userInfo.motherChineseName
  profile.name.mother.email = userInfo.motherEmail
  profile.name.mother.mobile = userInfo.motherMobile
  
  profile.address.street = userInfo.street
  profile.address.city = userInfo.city
  profile.address.state = userInfo.state
  profile.address.zip = userInfo.zip
  
  user.profile = profile
  user.roles = ['user']
  
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
