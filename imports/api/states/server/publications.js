import { Meteor } from 'meteor/meteor'
import { States } from '../states'

Meteor.publish('states', function () {
  return States.find()
})
