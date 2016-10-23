import { Meteor } from 'meteor/meteor'
import { Teachers } from '../teachers'

Meteor.publish('teachers', () => Teachers.find())
