import { Meteor } from 'meteor/meteor'
import { Roles } from 'meteor/alanning:roles'

Meteor.publish('users', () => {
  const isAdmin = Roles.userIsInRole(this.userId, 'admin')
  
  if (isAdmin) {
    return [Meteor.users.find({})]
  }
  return null
})
