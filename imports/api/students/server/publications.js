import { Meteor } from 'meteor/meteor'
import { Students } from '../students'
import { Roles } from 'meteor/alanning:roles'

Meteor.publish('students', function () {
  const isAdmin = Roles.userIsInRole(this.userId, 'admin')
  if (isAdmin) {
    return Students.find()
  }
  return Students.find({ familyId: this.userId })
})
