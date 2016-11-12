import React from 'react'
import { Grid, Header, Dropdown, Button, Message, Divider } from 'semantic-ui-react'
import CourseList from './CourseList'
import CourseListToRegister from './CourseListToRegister'
import _ from 'lodash'

const optionsSemester = [
  { text: '2017 春季', value: '2017 Spring' },
  { text: '2016 秋季', value: '2016 Fall' },
  { text: '2016 春季', value: '2016 Spring' },
  { text: '所有学期', value: 'ALL' },
]

const optionsCourseType = [
  { text: '学前中文和CSL', value: 'ChinesePreCSL' },
  { text: '一至三年级中文课', value: 'Chinese123' },
  { text: '三年级以上中文课', value: 'ChineseAbove3' },
  { text: '中文AP', value: 'ChineseAP' },
  { text: '学前班文化课', value: 'CulturePreK' },
  { text: '小班少儿文体课', value: 'CultureSmallKid' },
  { text: '大班少儿文体课', value: 'CultureBigKid' },
  { text: '家长俱乐部', value: 'ParentsClub' },
  { text: '所有课程', value: 'ALL' },
]

const removeCourseSelected = (coursesSelected, courseId) => {
  const coursesSelectedNew = coursesSelected.splice(0)
  let indexToRemove = null
  coursesSelectedNew.forEach((course, index) => {
    if (course._id === name) {
      indexToRemove = index
    }
  })
  coursesSelectedNew.splice(indexToRemove, 1)
  return coursesSelectedNew
}

class CourseRegistration extends React.Component {
  
  formatStudent = (student) => {
    return { text: student.chinese, value: student.chinese }
  }
  
  state = {
    optionsSemester,
    optionsCourseType,
    semesterSelected: optionsSemester[0].value,
    courseTypeSelected: 'ALL',
    studentSelected: null,
    coursesSelected: [],
  
    courses: [
      {
        _id: '10001',
        course: '学前一班',
        teacher: '魏萍',
        session: '09:00-11:00',
        term: '全年',
        tuition: 1000,
        bookFee: 120,
        regFee: 40,
        extraFee: 10,
        checked: false,
      },
      {
        _id: '10002',
        course: '学前二班',
        teacher: '魏萍',
        session: '11:00-13:00',
        term: '全年',
        tuition: 1000,
        bookFee: 120,
        regFee: 40,
        extraFee: 20,
        checked: false,
      },
    ],
    
    students: _.map(this.props.students, this.formatStudent),
  }
  
  handleSemesterChange = (e, { value }) => this.setState({ semesterSelected: value })
  handleCourseTypeChange = (e, { value }) => this.setState({ courseTypeSelected: value })
  handleSearch = () => {
    // console.log(semesterSelected)
    // console.log(courseTypeSelected)
    // console.log(recordsPerPageSelected)
  }
  
  handleSelectStudent = (e, { value }) => {
    e.preventDefault()
    this.setState({ studentSelected: value })
  }
  
  handleToggleCourse = (e, { name, checked }) => {
    e.preventDefault()
  
    const courses = this.state.courses.splice(0)
    courses.forEach((course) => {
      if (course._id === name) {
        course.checked = checked
      }
    })
    
    let coursesSelected = this.state.coursesSelected.splice(0)
    if (checked) {
      courses.forEach((course) => {
        if (course._id === name) {
          // For selected course, use a different course id
          // to avoid same key in the table row
          const courseSelected = Object.assign(course, { _id: course._id + '_selected' })
          coursesSelected.push(courseSelected)
        }
      })
    } else {
      coursesSelected = removeCourseSelected(coursesSelected, name)
    }
    
    this.setState({ courses })
    this.setState({ coursesSelected })
  }
  
  handleRemoveCourse = (courseId) => {
    const coursesSelected = removeCourseSelected(this.state.coursesSelected, courseId)
    this.setState({ coursesSelected })
  
    const courses = this.state.courses.splice(0)
    courses.forEach((course) => {
      if (course._id === courseId) {
        course.checked = false
      }
    })
    this.setState({ courses })
  }
  
  render() {
    const { courses, students, studentSelected, semesterSelected, courseTypeSelected, coursesSelected } = this.state
    
    return (
      <Grid textAlign='left' width={16}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Header as='h2' icon='plus' content='Register Course' />
          </Grid.Column>
        </Grid.Row>
  
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Header as='h4' content='Register course for:' />
            <Dropdown
              options={students}
              placeholder='Select student'
              selection
              fluid
              onChange={this.handleSelectStudent}
            />
          </Grid.Column>
        </Grid.Row>
        
        <Divider />
        
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Header as='h4' content='Search courses to register:' />
            <Dropdown
              options={this.state.optionsSemester}
              placeholder='Select semester'
              selection
              fluid
              scrolling
              onChange={this.handleSemesterChange}
            />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Header as='h4' content='hidden' style={{ visibility: 'hidden' }} />
            <Dropdown
              options={this.state.optionsCourseType}
              placeholder='Select category'
              selection
              fluid
              scrolling
              onChange={this.handleCourseTypeChange}
            />
          </Grid.Column>
  
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Header as='h4' content='hidden' style={{ visibility: 'hidden' }} />
              <Button
                primary
                type='submit'
                content='搜索课程'
                onClick={this.handleSearch}
              />
          </Grid.Column>
        </Grid.Row>
  
        <Grid.Row>
          <CourseList
            courses={courses}
            toggleCourse={this.handleToggleCourse}
          />
        </Grid.Row>
        
        <Divider /><br />
  
        <Grid.Row>
          <CourseListToRegister
            courses={coursesSelected}
            removeCourse={this.handleRemoveCourse}
          />
        </Grid.Row>
        
        <Grid.Row>
          <Message>
            <pre>studentSelected: {JSON.stringify(studentSelected, null, 2)}</pre>
            <pre>semesterSelected: {JSON.stringify(semesterSelected, null, 2)}</pre>
            <pre>courseTypeSelected: {JSON.stringify(courseTypeSelected, null, 2)}</pre>
            <pre>coursesSelected: {JSON.stringify(coursesSelected, null, 2)}</pre>
          </Message>
        </Grid.Row>
        
      </Grid>
    )
  }
}

CourseRegistration.propTypes = {
  students: React.PropTypes.array,
}

export default CourseRegistration
