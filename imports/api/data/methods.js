import { States } from './states'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { rateLimit } from '../../modules/rate-limit.js'

export const insertState = new ValidatedMethod({
  name: 'states.insert',
  validate: States.schema.validator(),
  run(doc) {
    States.insert(doc)
  },
})

export const updateState = new ValidatedMethod({
  name: 'states.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.text': { type: String, optional: true },
    'update.value': { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    States.update(_id, { $set: update })
  },
})

export const removeState = new ValidatedMethod({
  name: 'states.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    States.remove(_id)
  },
})

rateLimit({
  methods: [
    insertState,
    updateState,
    removeState,
  ],
  limit: 5,
  timeRange: 1000,
})
