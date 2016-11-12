import { Meteor } from 'meteor/meteor'
import { States, Terms, Genders, Categories, Classrooms, RegStatuses, Sessions, Semesters, Classes } from '../data'

Meteor.publish('states', function () {
  return States.find()
})

Meteor.publish('terms', function () {
  return Terms.find()
})

Meteor.publish('genders', function () {
  return Genders.find()
})

Meteor.publish('categories', function () {
  return Categories.find()
})

Meteor.publish('classrooms', function () {
  return Classrooms.find()
})

Meteor.publish('regstatuses', function () {
  return RegStatuses.find()
})

Meteor.publish('sessions', function () {
  return Sessions.find()
})

Meteor.publish('semesters', function () {
  return Semesters.find({}, { sort: { text: -1 } })
})

Meteor.publish('classes', function () {
  return Classes.find()
})
