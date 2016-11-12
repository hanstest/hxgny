import { Meteor } from 'meteor/meteor'
import { composeWithTracker } from 'react-komposer'
import { Students } from '../../api/students/students'
import CourseRegistration from '../components/CourseRegistration'
import Loading from '../components/loading'

const composer = (params, onData) => {
  const subStudents = Meteor.subscribe('students')
  if (subStudents.ready()) {
    const students = Students.find().fetch()
    onData(null, { students })
  }
}

export default composeWithTracker(composer, Loading)(CourseRegistration)
