import React from 'react'
import { Grid, Table, Header, Message, Modal, Button } from 'semantic-ui-react'
import { updateStudent, removeStudent } from '../../api/students/methods.js'
import StudentRowEditable from './StudentRowEditable'
import StudentRowDisplay from './StudentRowDisplay'

class StudentList extends React.Component {
  state = { editing: null, update: null, studentId: null, open: false, confirmed: false }
  
  toggleEditing = (studentId) => {
    this.setState({ editing: studentId, update: null })
  }
  
  showCourses = (studentId) => {
    // TODO
  }
  
  handleChangeFirstName = (event) => {
    const newState = Object.assign(this.state.update || {}, { first: event.target.value })
    this.setState({ update: newState })
  }
  
  handleChangeLastName = (event) => {
    const newState = Object.assign(this.state.update || {}, { last: event.target.value })
    this.setState({ update: newState })
  }
  
  handleChangeChineseName = (event) => {
    const newState = Object.assign(this.state.update || {}, { chinese: event.target.value })
    this.setState({ update: newState })
  }
  
  handleChangeGender = (event, { value }) => {
    const newState = Object.assign(this.state.update || {}, { gender: value })
    this.setState({ update: newState })
  }
  
  handleUpdateStudent = (studentId) => {
    if (this.state.update === null) {
      this.setState({ editing: null })
    }
    
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
  
  showConfirmation = (studentId) => {
    this.setState({ open: true, studentId })
  }
  
  handleRemoveStudent = () => {
    removeStudent.call({
      _id: this.state.studentId,
    }, (error) => {
      if (error) {
        console.log(error.reason)
      } else {
        this.setState({ open: false, studentId: null })
      }
    })
  }
  
  renderItemOrEditField = (student) => {
    const studentId = student._id
    if (this.state.editing === studentId) {
      return (
        <StudentRowEditable
          key={student._id}
          student={student}
          updateStudent={() => this.handleUpdateStudent(studentId)}
          removeStudent={() => this.showConfirmation(studentId)}
          handleChangeFirst={this.handleChangeFirstName}
          handleChangeLast={this.handleChangeLastName}
          handleChangeChinese={this.handleChangeChineseName}
          handleChangeGender={this.handleChangeGender}
          showCourseStatus='disabled'
        />
      )
    }
    
    return (
      <StudentRowDisplay
        key={student._id}
        student={student}
        toggleEditing={() => this.toggleEditing(studentId)}
        removeStudent={() => this.showConfirmation(studentId)}
        showCourses={() => this.showCourses(studentId)}
      />
    )
  }
  
  close = () => this.setState({ open: false })
  
  render() {
    const { open } = this.state
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
            </Table>}
            {this.props.students.length === 0 && <Message info>No enrolled students!</Message>}
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Modal size='small' dimmer='blurring' open={open} onClose={this.close}>
            <Modal.Header>
              Delete Student
            </Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to delete this student?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button
                negative
                icon='remove'
                labelPosition='right'
                content='No'
                onClick={() => this.setState({ open: false }) }
              />
              <Button
                positive
                icon='checkmark'
                labelPosition='right'
                content='Yes'
                onClick={this.handleRemoveStudent}
              />
            </Modal.Actions>
          </Modal>
        </Grid.Row>
      </Grid>
    )
  }
}

StudentList.propTypes = {
  students: React.PropTypes.array,
}

export default StudentList
