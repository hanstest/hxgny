import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const allowList = {
  insert: () => false,
  update: () => false,
  remove: () => false,
}

const denyList = {
  insert: () => true,
  update: () => true,
  remove: () => true,
}

const schema = new SimpleSchema({
  text: {
    type: String,
    label: 'The internal value.',
  },
  value: {
    type: String,
    label: 'The internal value.',
  },
})

export const States = new Mongo.Collection('states')
States.allow(allowList)
States.deny(denyList)
States.schema = schema
States.attachSchema(schema)

export const Terms = new Mongo.Collection('terms')
Terms.allow(allowList)
Terms.deny(denyList)
Terms.schema = schema
Terms.attachSchema(schema)

export const Genders = new Mongo.Collection('genders')
Genders.allow(allowList)
Genders.deny(denyList)
Genders.schema = schema
Genders.attachSchema(schema)

export const Categories = new Mongo.Collection('categories')
Categories.allow(allowList)
Categories.deny(denyList)
Categories.schema = schema
Categories.attachSchema(schema)

export const Classrooms = new Mongo.Collection('classrooms')
Classrooms.allow(allowList)
Classrooms.deny(denyList)
Classrooms.schema = schema
Classrooms.attachSchema(schema)

export const RegStatuses = new Mongo.Collection('regstatuses')
RegStatuses.allow(allowList)
RegStatuses.deny(denyList)
RegStatuses.schema = schema
RegStatuses.attachSchema(schema)

export const Sessions = new Mongo.Collection('sessions')
Sessions.allow(allowList)
Sessions.deny(denyList)
Sessions.schema = schema
Sessions.attachSchema(schema)

export const Semesters = new Mongo.Collection('semesters')
Semesters.allow(allowList)
Semesters.deny(denyList)
Semesters.schema = schema
Semesters.attachSchema(schema)

export const Classes = new Mongo.Collection('classes')
Classes.allow(allowList)
Classes.deny(denyList)
Classes.schema = schema
Classes.attachSchema(schema)
