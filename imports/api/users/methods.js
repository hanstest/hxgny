import { Users } from './users'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { rateLimit } from '../../modules/rate-limit.js'
import { Accounts } from 'meteor/accounts-base'
import { Roles } from 'meteor/alanning:roles'

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

export const insertUser = new ValidatedMethod({
  name: 'allUsers.insert',
  validate: new SimpleSchema({
    email: { type: String },
    password: { type: String },
    profile: { type: ProfileSchema },
    roles: { type: [String] },
  }).validator(),
  run(user) {
    console.log(user)
    const userId = Accounts.createUser(user)
    console.log(userId)
    // Roles.addUsersToRoles(userId, user.roles)
  },
})

export const updateUser = new ValidatedMethod({
  name: 'allUsers.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.email': { type: String, optional: false },
  }).validator(),
  run({ _id, update }) {
    Users.update(_id, { $set: update })
  },
})

export const removeUser = new ValidatedMethod({
  name: 'allUsers.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Users.remove(_id)
  },
})

rateLimit({
  methods: [
    insertUser,
    updateUser,
    removeUser,
  ],
  limit: 5,
  timeRange: 1000,
})
