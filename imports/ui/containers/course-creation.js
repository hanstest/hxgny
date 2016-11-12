import { Meteor } from 'meteor/meteor'
import { composeWithTracker } from 'react-komposer'
import { Semesters, RegStatuses, Classrooms, Sessions, Categories, Classes, Terms } from '../../api/data/data'
import CourseCreation from '../components/CourseCreation'
import Loading from '../components/loading'

const composer = (params, onData) => {
  const subSemesters = Meteor.subscribe('semesters')
  const subRegStatuses = Meteor.subscribe('semesters')
  const subClassrooms = Meteor.subscribe('classrooms')
  const subSessions = Meteor.subscribe('sessions')
  const subCategories = Meteor.subscribe('categories')
  const subClasses = Meteor.subscribe('classes')
  const subTerms = Meteor.subscribe('terms')
  if (subSemesters.ready() &&
    subRegStatuses.ready() &&
    subClassrooms.ready() &&
    subSessions.ready() &&
    subCategories.ready() &&
    subTerms.ready() &&
    subClasses.ready()) {
    const semesters = Semesters.find().fetch()
    const regstatuses = RegStatuses.find().fetch()
    const classrooms = Classrooms.find().fetch()
    const sessions = Sessions.find().fetch()
    const categories = Categories.find().fetch()
    const classes = Classes.find().fetch()
    const terms = Terms.find().fetch()
    onData(null, { semesters, regstatuses, classrooms, sessions, categories, classes, terms })
  }
}

export default composeWithTracker(composer, Loading)(CourseCreation)
