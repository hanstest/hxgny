import { Meteor } from 'meteor/meteor'
import { composeWithTracker } from 'react-komposer'
import { Classes } from '../../api/data/data'
import ClassList from '../components/ClassList'
import Loading from '../components/loading'

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('classes')
  if (subscription.ready()) {
    const items = Classes.find().fetch()
    onData(null, { items })
  }
}

export default composeWithTracker(composer, Loading)(ClassList)
