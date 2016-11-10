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

export const Terms = new Mongo.Collection('states')
Terms.allow(allowList)
Terms.deny(denyList)
Terms.schema = schema
Terms.attachSchema(schema)

export const Genders = new Mongo.Collection('genders')
Genders.allow(allowList)
Genders.deny(denyList)
Genders.schema = schema
Genders.attachSchema(schema)

export const CourseCategories = new Mongo.Collection('categories')
CourseCategories.allow(allowList)
CourseCategories.deny(denyList)
CourseCategories.schema = schema
CourseCategories.attachSchema(schema)

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
Sessions.attachSchema(schema)

export const Semesters = new Mongo.Collection('semesters')
Semesters.allow(allowList)
Semesters.deny(denyList)
Semesters.attachSchema(schema)
