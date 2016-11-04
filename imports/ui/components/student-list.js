// import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Grid, Table, Header, Message, Button, Input, Select } from 'semantic-ui-react'
import genders from '../../api/data/genders'
import { updateStudent, removeStudent } from '../../api/students/methods.js'

const handleUpdateStudent = (studentId, update) => {
  updateStudent.call({
    _id: studentId,
    update,
  }, (error) => {
    if (error) {
      console.log(error.reason)
    } else {
      console.log('Document updated!')
    }
  })
}

const handleRemoveStudent = (studentId) => {
  if (confirm('Are you sure? This is permanent.')) {
    removeStudent.call({
      _id: studentId,
    }, (error) => {
      if (error) {
        console.log(error.reason)
      } else {
        console.log('Student removed!')
      }
    })
  }
}

const formatDate = (date) => {
  const mm = date.getMonth() + 1 // getMonth() is zero-based
  const dd = date.getDate()
  return [this.getFullYear(), !mm[1] && '0', mm, !dd[1] && '0', dd].join('-') // padding
}

class StudentList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editing: null }
  }
  
  toggleEditing = (studentId) => {
    this.setState({ editing: studentId })
  }
  
  showCourses = (studentId) => {
    // TODO
  }
  
  renderItemOrEditField = (student) => {
    const studentId = student._id
    if (this.state.editing === studentId) {
      return (
        <Table.Row textAlign='center'>
          <Table.Cell icon='save' onClick={handleUpdateStudent(studentId)} />
          <Table.Cell icon='trash' onClick={handleRemoveStudent(studentId)} />
          <Table.Cell><Input name='first' type='text' defaultValue={student.first} /></Table.Cell>
          <Table.Cell><Input name='last' type='text' defaultValue={student.last} /></Table.Cell>
          <Table.Cell><Input name='chinese' type='text' defaultValue={student.chinese} /></Table.Cell>
          <Table.Cell><Select name='gender' options={genders} defaultValue={student.gender} /></Table.Cell>
          <Table.Cell>{formatDate(student.dob)}</Table.Cell>
          <Table.Cell><Button primary SonClick={this.showCourses(studentId)}>Show</Button></Table.Cell>
        </Table.Row>
      )
    }
    
    return (
      <Table.Row textAlign='center'>
        <Table.Cell icon='write' onClick={this.toggleEditing(studentId)} />
        <Table.Cell icon='trash' onClick={handleRemoveStudent(studentId)} />
        <Table.Cell>{student.first}</Table.Cell>
        <Table.Cell>{student.last}</Table.Cell>
        <Table.Cell>{student.chinese}</Table.Cell>
        <Table.Cell>{student.gender}</Table.Cell>
        <Table.Cell>{formatDate(student.dob)}</Table.Cell>
        <Table.Cell><Button primary SonClick={this.showCourses(studentId)}>Show</Button></Table.Cell>
      </Table.Row>
    )
  }
  
  render() {
    let studentsTable = null
    if (this.props.students.length > 0) {
      studentsTable = (
        <Table size='small' celled selectable singleLine>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell>Modify</Table.HeaderCell>
              <Table.HeaderCell>Delete</Table.HeaderCell>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Chinese Name</Table.HeaderCell>
              <Table.HeaderCell>Gender</Table.HeaderCell>
              <Table.HeaderCell>Birthday</Table.HeaderCell>
              <Table.HeaderCell>Enrolled Courses</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.students.map((student) => {
              return this.renderItemOrEditField(student)
            })}
          </Table.Body>
        </Table>
      )
    } else {
      studentsTable = (
        <Message info>
          No enrolled students!
        </Message>
      )
    }
    
    return (
      <Grid textAlign='left' width={16}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Header as='h2' icon='student' content='学生管理' />
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Grid.Column width={16}>
            {studentsTable}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

StudentList.propTypes = {
  students: React.PropTypes.array,
}

export default StudentList
