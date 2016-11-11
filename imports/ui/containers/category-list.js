import { Meteor } from 'meteor/meteor'
import { composeWithTracker } from 'react-komposer'
import { Categories } from '../../api/data/data'
import CategoryList from '../components/CategoryList'
import Loading from '../components/loading'

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('categories')
  if (subscription.ready()) {
    const items = Categories.find().fetch()
    onData(null, { items })
  }
}

export default composeWithTracker(composer, Loading)(CategoryList)
