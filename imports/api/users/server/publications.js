import { Meteor } from 'meteor/meteor'
import { Roles } from 'meteor/alanning:roles'

// Arrow callback cannot be used in publications.
// Otherwise, this is not defined.
Meteor.publish('users', function () {
  const isAdmin = Roles.userIsInRole(this.userId, 'admin')
  if (isAdmin) {
    return [Meteor.users.find({})]
  }
  return null
})
