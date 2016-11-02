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
    type: SimpleSchema.RegEx.Id,
    label: 'The family id of the student.',
    max: 100,
  },
  first: {
    type: String,
    label: 'The first name of the student.',
    max: 50,
  },
  last: {
    type: String,
    label: 'The last name of the student.',
    max: 50,
  },
  chinese: {
    type: String,
    label: 'The Chinese name of the student.',
    max: 50,
  },
  dob: {
    type: Date,
    label: 'The date of birth of the student.',
  },
  gender: {
    type: String,
    label: 'The gender of the student.',
    allowedValues: ['M', 'F'],
  },
})

Students.attachSchema(Students.schema)
