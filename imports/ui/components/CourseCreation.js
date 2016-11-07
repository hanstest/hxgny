import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Grid, Button, Header, Form, Modal, Table, Message } from 'semantic-ui-react'
// import { insertCourse } from '../../api/courses/methods.js'
import semesters from '../../api/data/semesters'
import courses from '../../api/data/courses'
import categories from '../../api/data/categories'
import classrooms from '../../api/data/classrooms'
import sessions from '../../api/data/sessions'
import regstatuses from '../../api/data/regstatuses'


class CourseCreation extends React.Component {
  state = { open: false, email: null, teacher: null, formData: {} }
  
  addCourse = (e, formData) => {
    e.preventDefault()
    
    // TODO
    console.log('Add a new course')
  
    this.setState({ formData })
    this.setState({ open: true })
    // Close the modal in three seconds
    setInterval(() => { this.setState({ open: false }) }, 3000)
  }
  
  handleSearchTeacher = () => {
    if (this.state.teacher !== null) {
      return
    }
    
    const user = Meteor.users.findOne({ 'emails.address': this.state.email })
    this.setState({ didSearch: true })
    if (user) {
      let teacher = Object.assign({}, user.profile.name)
      teacher = Object.assign(teacher, { gender: user.profile.gender })
      this.setState(teacher)
    } else {
      this.setState({ didSearch: true })
    }
  }
  
  setEmail = (value) => {
    this.setState({ email: value })
  }
  
  render() {
    const { open, didSearch, teacher, formData } = this.state
    
    return (
      <Grid textAlign='left' width={16}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Header as='h2' icon='book' content='添加课程' />
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Grid.Column width={16}>
            <Form onSubmit={this.addCourse}>
  
              <fieldset>
                <legend><Header as='h3' color='blue' content='课程信息' /></legend>
              
                <Form.Group widths='equal'>
                  <Form.Select
                    label='课程学期'
                    name='semester'
                    options={semesters}
                    placeholder='Select semester'
                  />
                  <Form.Select
                    label='课程班级'
                    name='course'
                    options={courses}
                    placeholder='Select course'
                  />
                  <Form.Select
                    label='课程分类'
                    name='category'
                    options={categories}
                    placeholder='Select category'
                  />
                  <Form.Select
                    label='上课地点'
                    name='classroom'
                    options={classrooms}
                    placeholder='Select classroom'
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Select
                    label='上课时间'
                    name='session'
                    options={sessions}
                    placeholder='Select session'
                  />
                  <Form.Input
                    label='人数上限'
                    name='maxNumStudents'
                    placeholder='Maximum number of students'
                    type='number'
                    min='10'
                    max='40'
                  />
                  <Form.Input
                    label='最低年龄'
                    name='minAge'
                    placeholder='Minimum age of a student'
                    type='number'
                    min='2'
                    max='30'
                  />
                  <Form.Select
                    label='注册状态'
                    name='regstatus'
                    options={regstatuses}
                    placeholder='Select registration status'
                  />
                </Form.Group>
              </fieldset>
              
              <br />
              <fieldset>
                <legend><Header as='h3' color='blue' content='任课老师' /></legend>
                <Form.Group inline>
                  <Form.Input
                    name='email'
                    label='Email'
                    icon='mail'
                    iconPosition='left'
                    value={this.state.email}
                    placeholder='teacher@example.com'
                    onChange={this.setEmail}
                  />
                  <Button type='submit' onClick={this.handleSearchTeacher}>查找老师</Button>
                  {didSearch && teacher === null && <Button disabled color='red'>老师不存在</Button>}
                </Form.Group>
                
  
                {teacher !== null && <Table size='small' celled selectable singleLine>
                  <Table.Header>
                    <Table.Row textAlign='center'>
                      <Table.HeaderCell>First Name</Table.HeaderCell>
                      <Table.HeaderCell>Last Name</Table.HeaderCell>
                      <Table.HeaderCell>Chinese Name</Table.HeaderCell>
                      <Table.HeaderCell>Gender</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
    
                  <Table.Body>
                    <Table.Row textAlign='center'>
                      <Table.Cell>{teacher.first}</Table.Cell>
                      <Table.Cell>{teacher.last}</Table.Cell>
                      <Table.Cell>{teacher.chinese}</Table.Cell>
                      <Table.Cell>{teacher.gender}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>}
                
              </fieldset>
              
              <br />
              <fieldset>
                <legend><Header as='h3' color='blue' content='课程费用' /></legend>
                  <Form.Group widths='equal'>
                    <Form.Input
                      label='学期费用'
                      name='semesterFee'
                      placeholder='Semester tuition'
                      type='number'
                    />
                    <Form.Input
                      label='学年费用'
                      name='fullYearFee'
                      placeholder='Full-year tuition'
                      type='number'
                    />
                    <Form.Input
                      label='教材费用'
                      name='bookFee'
                      placeholder='Book fee'
                      type='number'
                    />
                    <Form.Input
                      label='特殊费用'
                      name='specialFee'
                      placeholder='Special feed'
                      type='number'
                    />
                  </Form.Group>
              </fieldset>
  
              <br />
              <Button primary type='submit'>添加课程</Button>
  
              <Message>
                <pre>formData: {JSON.stringify(formData, null, 2)}</pre>
                <pre>teacher: {JSON.stringify(teacher, null, 2)}</pre>
              </Message>
              
            </Form>
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Modal size='small' dimmer='blurring' open={open}>
            <Modal.Header>
              Confirmation
            </Modal.Header>
            <Modal.Content>
              <p>Successfully created a course!</p>
            </Modal.Content>
          </Modal>
        </Grid.Row>
      
      </Grid>
    )
  }
}

export default CourseCreation
