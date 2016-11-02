import { Students } from './students'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { rateLimit } from '../../modules/rate-limit.js'

export const insertStudent = new ValidatedMethod({
  name: 'students.insert',
  validate: Students.schema.validator(),
  run(student) {
    Students.insert(student)
  },
})

export const updateStudent = new ValidatedMethod({
  name: 'students.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.first': { type: String, optional: true },
    'update.last': { type: String, optional: true },
    'update.chinese': { type: String, optional: true },
    'update.gender': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Students.update(_id, { $set: update })
  },
})

export const removeStudent = new ValidatedMethod({
  name: 'students.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Students.remove(_id)
  },
})

rateLimit({
  methods: [
    insertStudent,
    updateStudent,
    removeStudent,
  ],
  limit: 5,
  timeRange: 1000,
})
