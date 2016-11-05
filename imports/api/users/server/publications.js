import { Meteor } from 'meteor/meteor'
import { Roles } from 'meteor/alanning:roles'

Meteor.publish('users', () => {
  const loggedInUser = Meteor.user()
  const isAdmin = Roles.userIsInRole(loggedInUser, 'admin')
  if (isAdmin) {
    console.log('Here I am an admin: ' + loggedInUser)
    return [Meteor.users.find({})]
  }
  
  console.log('Here I am NOT an admin: ' + loggedInUser)
  
  return null
})
