import { Meteor } from 'meteor/meteor'
import { Roles } from 'meteor/alanning:roles'
import { Accounts } from 'meteor/accounts-base'

const users = [
  {
    email: 'hxgny.user@gmail.com',
    password: 'password',
    profile: {
      name: {
        father: {
          first: 'User',
          last: 'HXGNY',
          chinese: '华夏大纽约用户',
          email: 'hygny.user@gmail.com',
          mobile: '6467704433',
        },
        mother: {
          first: 'User',
          last: 'HXGNY',
          chinese: '华夏大纽约用户',
          email: 'hygny.user@gmail.com',
          mobile: '6467704433',
        },
      },
      contact: 'mother',
      address: {
        street: '123 Madison Ave.',
        city: 'New York',
        state: 'NY',
        zip: '10179',
      },
    },
    roles: ['user'],
  }, {
    email: 'hxgny.teacher@gmail.com',
    password: 'password',
    profile: {
      name: {
        father: {
          first: 'Teacher',
          last: 'HXGNY',
          chinese: '华夏大纽约老师',
          email: 'hygny.teacher@gmail.com',
          mobile: '6467704433',
        },
        mother: {
          first: 'Teacher',
          last: 'HXGNY',
          chinese: '华夏大纽约老师',
          email: 'hygny.teacher@gmail.com',
          mobile: '6467704433',
        },
      },
      contact: 'mother',
      address: {
        street: '123 Madison Ave.',
        city: 'New York',
        state: 'NY',
        zip: '10179',
      },
    },
    roles: ['teacher'],
  }, {
    email: 'hxgny.org@gmail.com',
    password: 'password',
    profile: {
      name: {
        father: {
          first: 'Admin',
          last: 'HXGNY',
          chinese: '华夏大纽约管理员',
          email: 'hygny.org@gmail.com',
          mobile: '6467704433',
        },
        mother: {
          first: 'Admin',
          last: 'HXGNY',
          chinese: '华夏大纽约管理员',
          email: 'hygny.org@gmail.com',
          mobile: '6467704433',
        },
      },
      contact: 'mother',
      address: {
        street: '123 Madison Ave.',
        city: 'New York',
        state: 'NY',
        zip: '10179',
      },
    },
    roles: ['admin'],
  },
]

users.forEach(({ email, password, profile, roles }) => {
  const userExists = Meteor.users.findOne({ 'emails.address': email })

  if (!userExists) {
    const userId = Accounts.createUser({ email, password, profile })
    Roles.addUsersToRoles(userId, roles)
  }
})
