import { States, Terms, Genders, Categories, Classrooms, RegStatuses, Sessions, Semesters } from './data'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { ValidatedMethod } from 'meteor/mdg:validated-method'

const schemaValidatorUpdate = new SimpleSchema({
  _id: { type: String },
  'update.text': { type: String, optional: true },
  'update.value': { type: String, optional: true },
}).validator()

const schemaValidatorRemove = new SimpleSchema({
  _id: { type: String },
}).validator()

export const insertState = new ValidatedMethod({
  name: 'states.insert',
  validate: States.schema.validator(),
  run(doc) {
    States.insert(doc)
  },
})

export const updateState = new ValidatedMethod({
  name: 'states.update',
  validate: schemaValidatorUpdate,
  run({ _id, update }) {
    States.update(_id, { $set: update })
  },
})

export const removeState = new ValidatedMethod({
  name: 'states.remove',
  validate: schemaValidatorRemove,
  run({ _id }) {
    States.remove(_id)
  },
})

export const insertTerm = new ValidatedMethod({
  name: 'terms.insert',
  validate: Terms.schema.validator(),
  run(doc) {
    Terms.insert(doc)
  },
})

export const updateTerm = new ValidatedMethod({
  name: 'terms.update',
  validate: schemaValidatorUpdate,
  run({ _id, update }) {
    Terms.update(_id, { $set: update })
  },
})

export const removeTerm = new ValidatedMethod({
  name: 'terms.remove',
  validate: schemaValidatorRemove,
  run({ _id }) {
    Terms.remove(_id)
  },
})

export const insertGender = new ValidatedMethod({
  name: 'genders.insert',
  validate: Genders.schema.validator(),
  run(doc) {
    Genders.insert(doc)
  },
})

export const updateGender = new ValidatedMethod({
  name: 'genders.update',
  validate: schemaValidatorUpdate,
  run({ _id, update }) {
    Genders.update(_id, { $set: update })
  },
})

export const removeGender = new ValidatedMethod({
  name: 'genders.remove',
  validate: schemaValidatorRemove,
  run({ _id }) {
    Genders.remove(_id)
  },
})

export const insertCategory = new ValidatedMethod({
  name: 'categories.insert',
  validate: Categories.schema.validator(),
  run(doc) {
    Categories.insert(doc)
  },
})

export const updateCategory = new ValidatedMethod({
  name: 'categories.update',
  validate: schemaValidatorUpdate,
  run({ _id, update }) {
    Categories.update(_id, { $set: update })
  },
})

export const removeCategory = new ValidatedMethod({
  name: 'categories.remove',
  validate: schemaValidatorRemove,
  run({ _id }) {
    Categories.remove(_id)
  },
})

export const insertClassroom = new ValidatedMethod({
  name: 'classrooms.insert',
  validate: Classrooms.schema.validator(),
  run(doc) {
    Classrooms.insert(doc)
  },
})

export const updateClassroom = new ValidatedMethod({
  name: 'classrooms.update',
  validate: schemaValidatorUpdate,
  run({ _id, update }) {
    Classrooms.update(_id, { $set: update })
  },
})

export const removeClassroom = new ValidatedMethod({
  name: 'classrooms.remove',
  validate: schemaValidatorRemove,
  run({ _id }) {
    Classrooms.remove(_id)
  },
})

export const insertRegStatus = new ValidatedMethod({
  name: 'reg.status.insert',
  validate: RegStatuses.schema.validator(),
  run(doc) {
    RegStatuses.insert(doc)
  },
})

export const updateRegStatus = new ValidatedMethod({
  name: 'reg.status.update',
  validate: schemaValidatorUpdate,
  run({ _id, update }) {
    RegStatuses.update(_id, { $set: update })
  },
})

export const removeRegStatus = new ValidatedMethod({
  name: 'reg.status.remove',
  validate: schemaValidatorRemove,
  run({ _id }) {
    RegStatuses.remove(_id)
  },
})

export const insertSession = new ValidatedMethod({
  name: 'sessions.insert',
  validate: Sessions.schema.validator(),
  run(doc) {
    Sessions.insert(doc)
  },
})

export const updateSession = new ValidatedMethod({
  name: 'sessions.update',
  validate: schemaValidatorUpdate,
  run({ _id, update }) {
    Sessions.update(_id, { $set: update })
  },
})

export const removeSession = new ValidatedMethod({
  name: 'sessions.remove',
  validate: schemaValidatorRemove,
  run({ _id }) {
    Sessions.remove(_id)
  },
})

export const insertSemester = new ValidatedMethod({
  name: 'semesters.insert',
  validate: Semesters.schema.validator(),
  run(doc) {
    Semesters.insert(doc)
  },
})

export const updateSemester = new ValidatedMethod({
  name: 'semesters.update',
  validate: schemaValidatorUpdate,
  run({ _id, update }) {
    Semesters.update(_id, { $set: update })
  },
})

export const removeSemester = new ValidatedMethod({
  name: 'semesters.remove',
  validate: schemaValidatorRemove,
  run({ _id }) {
    Semesters.remove(_id)
  },
})
