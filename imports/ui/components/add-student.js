import React from 'react'
import { insertStudent } from '../../api/students/methods.js'
import { Grid, Button, Header, Form } from 'semantic-ui-react'
import genders from '../../api/data/genders'
import NewUserConfirmation from './new-user-confirmation'

const handleInsertStudent = (formData) => {
  const student = {
    first: formData.first,
    last: formData.last,
    chinese: formData.chinese,
    dob: new Date(),
    gender: formData.gender,
  }

  insertStudent.call({
    student,
  }, (error) => {
    if (error) {
      console.log(error.reason)
    } else {
      console.log('Student added!')
    }
  })
}

class AddStudent extends React.Component {
  state = {
    first: '',
    last: '',
    chinese: '',
    done: false,
  }
  
  render() {
    return (
      <Grid textAlign='left' width={16}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Header as='h2' icon='student' content='添加学生' />
          </Grid.Column>
        </Grid.Row>
      
        {!this.state.done && <Grid.Row>
          <Grid.Column width={16}>
            <Form onSubmit={handleInsertStudent}>
            
              <Form.Group widths='equal'>
                <Form.Input
                  label='First Name'
                  name='first'
                  placeholder='First Name'
                  type='text'
                  defaultValue={this.state.first}
                />
                <Form.Input
                  label='Last Name'
                  name='last'
                  placeholder='Last Name'
                  type='text'
                  defaultValue={this.state.last}
                />
                <Form.Input
                  label='Chinese Name'
                  name='chinese'
                  placeholder='中文姓名'
                  type='text'
                  defaultValue={this.state.chinese}
                />
                <Form.Select label='Gender' name='gender' options={genders} placeholder='Select gender' />
              </Form.Group>
              <Button primary type='submit'>添加学生</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>}
      
        {
          this.state.done && <Grid.Row>
            <Grid.Column width={16}>
              {this.state.done && <NewUserConfirmation message='Successfully created a new student!' />}
            </Grid.Column>
          </Grid.Row>
        }
    
      </Grid>
    )
  }
}

export default AddStudent
