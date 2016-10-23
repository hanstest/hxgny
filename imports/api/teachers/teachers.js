import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

export const Teachers = new Mongo.Collection('Teachers')

Teachers.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
})

Teachers.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
})

Teachers.schema = new SimpleSchema({
  email: {
    type: String,
    label: 'Email address, also used as login user name',
  },
  firstName: {
    type: String,
    label: 'The first name of the current user',
  },
  lastName: {
    type: String,
    label: 'The last name of the current user',
  },
  chineseName: {
    type: String,
    label: 'The Chinese name of the current user',
  },
  gender: {
    type: String,
    label: 'The gender of the current user',
  },
  street: {
    type: String,
    label: 'The street of the mailing address',
  },
  city: {
    type: String,
    label: 'The city of the mailing address',
  },
  state: {
    type: String,
    label: 'The state of the mailing address',
  },
  zipcode: {
    type: String,
    label: 'The zip code of the mailing address',
  },
  createdOn: {
    type: Date,
    label: 'The date when the user was created',
  },
  createdBy: {
    type: String,
    label: 'The admin who created this user',
  },
})

Teachers.attachSchema(Teachers.schema)
