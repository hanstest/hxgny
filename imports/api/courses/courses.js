import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

export const Courses = new Mongo.Collection('courses')

Courses.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
})

Courses.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
})

Courses.schema = new SimpleSchema({
  semester: {
    type: String,
    label: 'The semester of the course.',
  },
  course: {
    type: String,
    label: 'The course name.',
  },
  category: {
    type: String,
    label: 'The course category.',
  },
  classroom: {
    type: String,
    label: 'The classroom for the course.',
  },
  session: {
    type: String,
    label: 'The session time.',
  },
  maxNumStudents: {
    type: Number,
    label: 'The maximum number of students allowed for this course.',
  },
  minAge: {
    type: Number,
    label: 'The minimum age of a student to register this course.',
  },
  regstatus: {
    type: String,
    label: 'The registration status.',
  },
  teacherId: {
    type: String,
    label: 'The teacher id of the course',
  },
})

Courses.attachSchema(Courses.schema)
