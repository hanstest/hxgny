import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
  createUser: (data) => {
    try {
      console.log('Register User')
      console.log(data)
      const userId = Accounts.createUser({
        username: data.email,
        email: data.email,
        password: data.password,
        profile: {},
      })
      return userId
    } catch (e) {
      throw e
    }
  },
})
