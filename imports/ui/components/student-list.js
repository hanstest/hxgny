// import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Grid, Table, Header, Message, Button, Input, Select, Icon } from 'semantic-ui-react'
import genders from '../../api/data/genders'
import { updateStudent, removeStudent } from '../../api/students/methods.js'

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
  return date.toISOString().slice(0, 10)
}

class StudentList extends React.Component {
  state = { editing: null, update: {} }
  
  toggleEditing = (studentId) => {
    this.setState({ editing: studentId, update: {} })
  }
  
  showCourses = (studentId) => {
    // TODO
  }
  
  handleChangeFirstName = (event) => {
    const newState = Object.assign(this.state.update, { first: event.target.value })
    this.setState({ update: newState })
  }
  
  handleChangeLastName = (event) => {
    const newState = Object.assign(this.state.update, { last: event.target.value })
    this.setState({ update: newState })
  }
  
  handleChangeChineseName = (event) => {
    const newState = Object.assign(this.state.update, { chinese: event.target.value })
    this.setState({ update: newState })
  }
  
  handleChangeGender = (event, { value }) => {
    const newState = Object.assign(this.state.update, { gender: value })
    this.setState({ update: newState })
  }
  
  handleUpdateStudent = (studentId) => {
    updateStudent.call({
      _id: studentId,
      update: this.state.update,
    }, (error) => {
      if (error) {
        console.log(error.reason)
      } else {
        this.setState({ editing: null })
      }
    })
  }
  
  renderItemOrEditField = (student) => {
    const studentId = student._id
    if (this.state.editing === studentId) {
      return (
        <Table.Row textAlign='center' key={studentId}>
          <Table.Cell>
            <Icon link name='save' onClick={() => this.handleUpdateStudent(studentId)} />
          </Table.Cell>
          <Table.Cell>
            <Icon link name='trash' onClick={() => handleRemoveStudent(studentId)} />
          </Table.Cell>
          <Table.Cell>
            <Input
              name='first'
              type='text'
              defaultValue={student.first}
              onChange={this.handleChangeFirstName}
            />
          </Table.Cell>
          <Table.Cell>
            <Input
              name='last'
              type='text'
              defaultValue={student.last}
              onChange={this.handleChangeLastName}
            />
          </Table.Cell>
          <Table.Cell>
            <Input
              name='chinese'
              type='text'
              defaultValue={student.chinese}
              onChange={this.handleChangeChineseName}
            />
          </Table.Cell>
          <Table.Cell>
            <Select
              name='gender'
              options={genders}
              defaultValue={student.gender}
              onChange={this.handleChangeGender}
            />
          </Table.Cell>
          <Table.Cell>{formatDate(student.dob)}</Table.Cell>
          <Table.Cell><Button primary>Show</Button></Table.Cell>
        </Table.Row>
      )
    }
    
    return (
      <Table.Row textAlign='center' key={studentId}>
        <Table.Cell>
          <Icon link name='write' onClick={() => this.toggleEditing(studentId)} />
        </Table.Cell>
        <Table.Cell>
          <Icon link name='trash' onClick={() => handleRemoveStudent(studentId)} />
        </Table.Cell>
        <Table.Cell>{student.first}</Table.Cell>
        <Table.Cell>{student.last}</Table.Cell>
        <Table.Cell>{student.chinese}</Table.Cell>
        <Table.Cell>{student.gender}</Table.Cell>
        <Table.Cell>{formatDate(student.dob)}</Table.Cell>
        <Table.Cell><Button secondary onClick={this.showCourses(studentId)}>Show</Button></Table.Cell>
      </Table.Row>
    )
  }
  
  render() {
    return (
      <Grid textAlign='left' width={16}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Header as='h2' icon='student' content='学生管理' />
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Grid.Column width={16}>
            {this.props.students.length > 0 && <Table size='small' celled selectable singleLine>
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
              
              <Table.Footer fullWidth>
                <Table.Row>
                  <Table.HeaderCell colSpan='8'>
                    <Button primary floated='right' size='small' content='Add Student' />
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>}
            {this.props.students.length === 0 && <Message info>No enrolled students!</Message>}
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
