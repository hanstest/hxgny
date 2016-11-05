import { Meteor } from 'meteor/meteor'
import { Students } from '../students'
import { Roles } from 'meteor/alanning:roles'

Meteor.publish('students', () => {
  console.log('userId: ' + this.userId)
  const isAdmin = Roles.userIsInRole(this.userId, 'admin')
  if (isAdmin) {
    console.log('I am an admin!')
    return Students.find()
  }
  
  console.log('I am NOT an admin...')
  
  return Students.find({ familyId: this.userId })
})
