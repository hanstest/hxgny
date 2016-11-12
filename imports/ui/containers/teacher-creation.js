import { Meteor } from 'meteor/meteor'
import { composeWithTracker } from 'react-komposer'
import { Genders, States } from '../../api/data/data'
import TeacherCreation from '../components/TeacherCreation'
import Loading from '../components/loading'

const composer = (params, onData) => {
  const subGender = Meteor.subscribe('genders')
  const subStates = Meteor.subscribe('states')
  if (subGender.ready() && subStates.ready()) {
    const genders = Genders.find().fetch()
    const states = States.find().fetch()
    onData(null, { genders, states })
  }
}

export default composeWithTracker(composer, Loading)(TeacherCreation)
