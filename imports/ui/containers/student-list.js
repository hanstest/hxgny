import { composeWithTracker } from 'react-komposer'
import { Students } from '../../api/students/students.js'
import StudentList from '../components/student-list.js'
import { Meteor } from 'meteor/meteor'

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('students')
  if (subscription.ready()) {
    const students = Students.find().fetch()
    console.log('I am here...')
    onData(null, { students })
  }
}
// TODO add a loading component here
// export default composeWithTracker(composer, Loading)(StudentList)
export default composeWithTracker(composer)(StudentList)
