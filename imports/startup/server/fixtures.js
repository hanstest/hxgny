import { Meteor } from 'meteor/meteor'
import { Roles } from 'meteor/alanning:roles'
import { Accounts } from 'meteor/accounts-base'

const users = [{
  email: 'hxgny.org@gmail.com',
  password: 'password',
  profile: {
    name: { first: 'Admin', last: 'HXGNY', chinese: '华夏大纽约管理员' },
  },
  roles: ['admin'],
}]

users.forEach(({ email, password, profile, roles }) => {
  const userExists = Meteor.users.findOne({ 'emails.address': email })

  if (!userExists) {
    const userId = Accounts.createUser({ email, password, profile })
    Roles.addUsersToRoles(userId, roles)
  }
})
