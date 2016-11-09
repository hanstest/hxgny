import { Meteor } from 'meteor/meteor'
import { composeWithTracker } from 'react-komposer'
import { States } from '../../api/states/states'
import StateList from '../components/StateList'
import Loading from '../components/loading'

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('states')
  if (subscription.ready()) {
    const items = States.find().fetch()
    onData(null, { items })
  }
}

export default composeWithTracker(composer, Loading)(StateList)
