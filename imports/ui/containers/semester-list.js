import { Meteor } from 'meteor/meteor'
import { composeWithTracker } from 'react-komposer'
import { Semesters } from '../../api/data/data'
import SemesterList from '../components/SemesterList'
import Loading from '../components/loading'

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('semesters')
  if (subscription.ready()) {
    const items = Semesters.find().fetch()
    onData(null, { items })
  }
}

export default composeWithTracker(composer, Loading)(SemesterList)
