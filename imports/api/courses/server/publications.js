import { Meteor } from 'meteor/meteor'
import { Courses } from '../courses'

Meteor.publish('courses', function () {
  return Courses.find()
})
