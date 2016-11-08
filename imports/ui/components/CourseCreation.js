import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Grid, Button, Header, Form, Modal, Table } from 'semantic-ui-react'
import { insertCourse } from '../../api/courses/methods.js'
import semesters from '../../api/data/semesters'
import courses from '../../api/data/courses'
import categories from '../../api/data/categories'
import classrooms from '../../api/data/classrooms'
import sessions from '../../api/data/sessions'
import regstatuses from '../../api/data/regstatuses'
import terms from '../../api/data/terms'


class CourseCreation extends React.Component {
  state = {
    searched: false,
    teacher: null,
    openNoTeacherWarning: false,
    openNewCourseConfirmation: false,
    key: (new Date()).getTime(),
  }
  
  handleSearchTeacher = (e, formData) => {
    e.preventDefault()
    if (this.state.teacher !== null) {
      return
    }
    
    const user = Meteor.users.findOne({ 'emails.address': formData.email })
    this.setState({ searched: true, email: formData.email })
    if (user) {
      let teacher = Object.assign({}, user.profile.name)
      teacher = Object.assign(teacher, { gender: user.profile.gender, id: user._id })
      this.setState({ teacher })
    } else {
      this.setState({
        teacher: null,
        searched: true,
        openNoTeacherWarning: true,
      })
      setInterval(() => {
        this.setState({
          searched: false,
          openNoTeacherWarning: false,
        })
      }, 5000)
    }
  }
  
  addCourse = (e, formData) => {
    e.preventDefault()
    
    insertCourse.call({
      teacherId: this.state.teacher.id,
      semester: formData.semester,
      course: formData.course,
      category: formData.category,
      classroom: formData.classroom,
      session: formData.session,
      maxNumStudents: parseInt(formData.maxNumStudents, 10),
      minAge: parseInt(formData.minAge, 10),
      regstatus: formData.regstatus,
    }, (error) => {
      if (error) {
        console.log(error.reason)
      } else {
        this.setState({ openNewCourseConfirmation: true })
  
        // Close the modal in three seconds
        setInterval(() => {
          this.setState({
            searched: false,
            openNewCourseConfirmation: false,
            key: (new Date()).getTime(),
          })
        }, 3000)
      }
    })
  }
  
  render() {
    const { searched, teacher, openNoTeacherWarning, openNewCourseConfirmation } = this.state
    
    return (
      <Grid textAlign='left' width={16} key={this.state.key}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Header as='h2' icon='book' content='添加课程' />
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Grid.Column width={8}>
            <Form onSubmit={this.handleSearchTeacher}>
              <fieldset>
                <legend><Header as='h3' color='blue' content='老师信息' /></legend>
                <Form.Group inline>
                  <Form.Input
                    label='Email'
                    name='email'
                    icon='mail'
                    iconPosition='left'
                    placeholder='david@example.com'
                  />
                  <Button type='submit'>查找老师</Button>
                </Form.Group>

                {searched && teacher !== null && <Table size='small' celled selectable singleLine>
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
            </Form>
          </Grid.Column>
        </Grid.Row>
  
        <Grid.Row>
          <Grid.Column width={16}>
            <Form onSubmit={this.addCourse}>
              <fieldset>
                <legend><Header as='h3' color='blue' content='基本信息' /></legend>
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
                    defaultValue={25}
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
                <legend><Header as='h3' color='blue' content='学费信息' /></legend>
                <Form.Group widths='equal'>
                  <Form.Select
                    label='学制'
                    name='term'
                    options={terms}
                    placeholder='Select term'
                  />
                  <Form.Input
                    label='学费'
                    name='semesterFee'
                    placeholder='Semester tuition'
                    type='number'
                    defaultValue={0.0}
                  />
                  <Form.Input
                    label='教材费'
                    name='bookFee'
                    placeholder='Book fee'
                    type='number'
                    defaultValue={0.0}
                  />
                  <Form.Input
                    label='注册费'
                    name='specialFee'
                    placeholder='Special feed'
                    type='number'
                    defaultValue={0.0}
                  />
                  <Form.Input
                    label='其它费用'
                    name='specialFee'
                    placeholder='Special feed'
                    type='number'
                    defaultValue={0.0}
                  />
                </Form.Group>
              </fieldset>
        
              <br />
              <Button primary type='submit'>添加课程</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Modal size='small' dimmer='blurring' open={openNoTeacherWarning}>
            <Modal.Header>
              Confirmation
            </Modal.Header>
            <Modal.Content>
              <p>No teacher is found. Please add this teacher from 教师管理！</p>
            </Modal.Content>
          </Modal>
        </Grid.Row>
        
        <Grid.Row>
          <Modal size='small' dimmer='blurring' open={openNewCourseConfirmation}>
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
