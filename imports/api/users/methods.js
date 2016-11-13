import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import { Roles } from 'meteor/alanning:roles'
import { check } from 'meteor/check'

Meteor.methods({
  createNewUser: (options, roles) => {
    check(options, {
      email: String,
      password: String,
      profile: { name: Object, address: Object },
    })
    check(roles, [String])
  
    const userId = Meteor.userId()
    if (!Roles.userIsInRole(userId, ['admin'])) {
      throw new Meteor.Error('Not enough rights', 'Only admins can create new users!')
    }
    const newUserId = Accounts.createUser(options)
    
    // Possibly send out an enrollment email...
    // Accounts.sendEnrollmentEmail(newUserId);
  
    Roles.addUsersToRoles(newUserId, roles)
  },
})
