import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

export const States = new Mongo.Collection('states')

States.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
})

States.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
})

States.schema = new SimpleSchema({
  text: {
    type: String,
    label: 'The internal value.',
  },
  value: {
    type: String,
    label: 'The internal value.',
  },
})

States.attachSchema(States.schema)
