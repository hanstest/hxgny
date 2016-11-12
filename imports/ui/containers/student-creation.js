import { Meteor } from 'meteor/meteor'
import { composeWithTracker } from 'react-komposer'
import { Genders } from '../../api/data/data'
import StudentCreation from '../components/StudentCreation'
import Loading from '../components/loading'

const composer = (params, onData) => {
  const subGenders = Meteor.subscribe('genders')
  if (subGenders.ready()) {
    const genders = Genders.find().fetch()
    onData(null, { genders })
  }
}

export default composeWithTracker(composer, Loading)(StudentCreation)
