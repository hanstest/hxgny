import { Teachers } from './teachers'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { rateLimit } from '../../modules/rate-limit.js'

export const insertTeacher = new ValidatedMethod({
  name: 'teachers.insert',
  validate: new SimpleSchema({
    email: { type: String },
    // TODO Add more fields
    // TODO Check what is the proper type for email
  }).validator(),
  run(user) {
    Teachers.insert(user)
  },
})

export const updateTeacher = new ValidatedMethod({
  name: 'teachers.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.title': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Teachers.update(_id, { $set: update })
  },
})

export const removeTeacher = new ValidatedMethod({
  name: 'teachers.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Teachers.remove(_id)
  },
})

rateLimit({
  methods: [
    insertTeacher,
    updateTeacher,
    removeTeacher,
  ],
  limit: 5,
  timeRange: 1000,
})
