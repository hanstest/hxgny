import { Courses } from './courses'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { rateLimit } from '../../modules/rate-limit.js'

export const insertCourse = new ValidatedMethod({
  name: 'courses.insert',
  validate: Courses.schema.validator(),
  run(course) {
    Courses.insert(course)
  },
})

export const updateCourse = new ValidatedMethod({
  name: 'courses.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.semester': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Courses.update(_id, { $set: update })
  },
})

export const removeCourse = new ValidatedMethod({
  name: 'courses.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Courses.remove(_id)
  },
})

rateLimit({
  methods: [
    insertCourse,
    updateCourse,
    removeCourse,
  ],
  limit: 10,
  timeRange: 1000,
})
