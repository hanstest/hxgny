// import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Grid, Button, Header, Form, Modal } from 'semantic-ui-react'
// import { insertCourse } from '../../api/courses/methods.js'
import semesters from '../../api/data/semesters'
import courses from '../../api/data/courses'
import categories from '../../api/data/categories'
import classrooms from '../../api/data/classrooms'
import sessions from '../../api/data/sessions'


class CourseCreation extends React.Component {
  state = { key: (new Date()).getTime(), open: false }
  
  addCourse = (e, formData) => {
    e.preventDefault()
    
    // TODO
    console.log('Add a new course')
  }
  
  render() {
    const { open } = this.state
    
    return (
      <Grid textAlign='left' width={16}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Header as='h2' icon='book' content='添加课程' />
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Grid.Column width={16}>
            <Form onSubmit={this.addCourse} key={this.state.key}>
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
                  label='上课教室'
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
                  name='maxStudents'
                  placeholder='Maximum number of students'
                  type='number'
                  min='10'
                  max='40'
                />
              </Form.Group>
              
              
              <Button primary type='submit'>添加课程</Button>
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
