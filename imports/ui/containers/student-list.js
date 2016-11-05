import { Meteor } from 'meteor/meteor'
import { composeWithTracker } from 'react-komposer'
import { Students } from '../../api/students/students'
import StudentList from '../components/student-list'
import Loading from '../components/loading'

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('students')
  if (subscription.ready()) {
    const students = Students.find().fetch()
    onData(null, { students })
  }
}

export default composeWithTracker(composer, Loading)(StudentList)
