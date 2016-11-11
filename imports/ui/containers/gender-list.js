import { Meteor } from 'meteor/meteor'
import { composeWithTracker } from 'react-komposer'
import { Genders } from '../../api/data/data'
import GenderList from '../components/GenderList'
import Loading from '../components/loading'

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('genders')
  if (subscription.ready()) {
    const items = Genders.find().fetch()
    onData(null, { items })
  }
}

export default composeWithTracker(composer, Loading)(GenderList)
