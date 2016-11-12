import { Meteor } from 'meteor/meteor'
import { composeWithTracker } from 'react-komposer'
import { Students } from '../../api/students/students'
import { Genders } from '../../api/data/data'
import StudentList from '../components/StudentList'
import Loading from '../components/loading'

const composer = (params, onData) => {
  const subStudents = Meteor.subscribe('students')
  const subGenders = Meteor.subscribe('genders')
  if (subStudents.ready() && subGenders.ready()) {
    const students = Students.find().fetch()
    const genders = Genders.find().fetch()
    onData(null, { students, genders })
  }
}

export default composeWithTracker(composer, Loading)(StudentList)
