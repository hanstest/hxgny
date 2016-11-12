import { Meteor } from 'meteor/meteor'
import { composeWithTracker } from 'react-komposer'
import { States } from '../../api/data/data'
import Signup from '../components/Signup'
import Loading from '../components/loading'

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('states')
  if (subscription.ready()) {
    const states = States.find().fetch()
    onData(null, { states })
  }
}

export default composeWithTracker(composer, Loading)(Signup)
