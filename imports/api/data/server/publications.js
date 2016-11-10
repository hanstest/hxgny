import { Meteor } from 'meteor/meteor'
import { Terms } from '../data'

Meteor.publish('terms', function () {
  return Terms.find()
})
