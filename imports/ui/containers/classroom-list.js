import { Meteor } from 'meteor/meteor'
import { composeWithTracker } from 'react-komposer'
import { Classrooms } from '../../api/data/data'
import ClassroomList from '../components/ClassroomList'
import Loading from '../components/loading'

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('classrooms')
  if (subscription.ready()) {
    const items = Classrooms.find().fetch()
    onData(null, { items })
  }
}

export default composeWithTracker(composer, Loading)(ClassroomList)
