import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { Roles } from 'meteor/alanning:roles'
import { check } from 'meteor/check'

Meteor.methods({
  createNewUser: (options, roles) => {
    const userId = Meteor.userId()
    console.log('I am here...')
    console.log('Login UserId: ' + userId)
    check(options, {
      email: String,
      password: String,
      profile: { name: Object, gender: String, address: Object },
    })
    check(roles, [String])
    if (!Roles.userIsInRole(userId, ['admin'])) {
      throw new Meteor.Error('Not enough rights', 'Only admins can create new users!')
    }
    const newUserId = Accounts.createUser(options)
    console.log('newUserId: ' + newUserId)
    // Possibly send out an enrollment email...
    // Accounts.sendEnrollmentEmail(newUserId);
  
    Roles.addUsersToRoles(newUserId, roles)
  },
})
