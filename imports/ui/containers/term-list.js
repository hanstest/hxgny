import { Meteor } from 'meteor/meteor'
import { composeWithTracker } from 'react-komposer'
import { Terms } from '../../api/data/data'
import TermList from '../components/TermList'
import Loading from '../components/loading'

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('terms')
  if (subscription.ready()) {
    const items = Terms.find().fetch()
    onData(null, { items })
  }
}

export default composeWithTracker(composer, Loading)(TermList)
