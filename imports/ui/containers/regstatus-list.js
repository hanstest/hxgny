import { Meteor } from 'meteor/meteor'
import { composeWithTracker } from 'react-komposer'
import { RegStatuses } from '../../api/data/data'
import RegStatusList from '../components/RegStatusList'
import Loading from '../components/loading'

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('regstatuses')
  if (subscription.ready()) {
    const items = RegStatuses.find().fetch()
    onData(null, { items })
  }
}

export default composeWithTracker(composer, Loading)(RegStatusList)
