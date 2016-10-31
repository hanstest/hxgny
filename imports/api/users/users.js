/* eslint-disable max-len */

import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

export const Users = new Mongo.Collection('Users')

Users.allow({
  insert: () => true,
  update: () => true,
  remove: () => true,
})

Users.deny({
  insert: () => false,
  update: () => false,
  remove: () => false,
})


const AddressSchema = new SimpleSchema({
  street: {
    type: String,
    max: 100,
  },
  city: {
    type: String,
    max: 50,
  },
  state: {
    type: String,
    regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/,
  },
  zip: {
    type: String,
    regEx: /^[0-9]{5}$/,
  },
})

const NameSchema = new SimpleSchema({
  first: {
    type: String,
    max: 50,
  },
  last: {
    type: String,
    max: 50,
  },
  chinese: {
    type: String,
    max: 50,
  },
})

const ProfileSchema = new SimpleSchema({
  name: {
    type: NameSchema,
  },
  gender: {
    type: String,
  },
  address: {
    type: AddressSchema,
  },
})

Users.schema = new SimpleSchema({
  email: {
    type: String,
    label: 'email used to login.',
  },
  password: {
    type: String,
    label: 'password to login.',
  },
  profile: {
    type: ProfileSchema,
  },
  roles: {
    type: [String],
  },
})

Users.attachSchema(Users.schema)
