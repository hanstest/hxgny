import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

export const Students = new Mongo.Collection('students')

Students.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
})

Students.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
})

Students.schema = new SimpleSchema({
  familyId: {
    type: String,
    label: 'The family id of the student.',
  },
  first: {
    type: String,
    label: 'The first name of the student.',
  },
  last: {
    type: String,
    label: 'The last name of the student.',
  },
  chinese: {
    type: String,
    label: 'The Chinese name of the student.',
  },
  dob: {
    type: Date,
    label: 'The date of birth of the student.',
  },
  gender: {
    type: String,
    label: 'The gender of the student.',
  },
})

Students.attachSchema(Students.schema)
