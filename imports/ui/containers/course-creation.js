import { Meteor } from 'meteor/meteor'
import { composeWithTracker } from 'react-komposer'
import { Semesters } from '../../api/data/data'
import CourseCreation from '../components/CourseCreation'
import Loading from '../components/loading'

const composer = (params, onData) => {
  const subSemesters = Meteor.subscribe('semesters')
  if (subSemesters.ready()) {
    const semesters = Semesters.find().fetch()
    onData(null, { semesters })
  }
}

export default composeWithTracker(composer, Loading)(CourseCreation)
