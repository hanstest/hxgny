import { Meteor } from 'meteor/meteor'
import { composeWithTracker } from 'react-komposer'
import { Sessions } from '../../api/data/data'
import SessionList from '../components/SessionList'
import Loading from '../components/loading'

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('sessions')
  if (subscription.ready()) {
    const items = Sessions.find().fetch()
    onData(null, { items })
  }
}

export default composeWithTracker(composer, Loading)(SessionList)
