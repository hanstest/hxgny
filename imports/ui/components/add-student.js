import React from 'react'
import { insertStudent } from '../../api/students/methods.js'
import { Grid, Button, Header, Form } from 'semantic-ui-react'
import genders from '../../api/data/genders'
import NewUserConfirmation from './new-user-confirmation'
import { DatePickerInput } from 'rc-datepicker'


class AddStudent extends React.Component {
  state = {
    dob: '',
    done: false,
  }
  
  onChange = (jsDate, dateString) => {
    console.log(jsDate, dateString)
    this.dob = jsDate
  }
  
  handleInsertStudent = (formData) => {
    const student = {
      first: formData.first,
      last: formData.last,
      chinese: formData.chinese,
      gender: formData.gender,
      dob: this.dob,
    }
    
    insertStudent.call({
      student,
    }, (error) => {
      if (error) {
        console.log(error.reason)
      } else {
        console.log('Student added!')
        this.setState({ done: true })
      }
    })
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
            <Form onSubmit={this.handleInsertStudent}>
            
              <Form.Group widths='equal'>
                <Form.Input
                  label='First Name'
                  name='first'
                  placeholder='First Name'
                  type='text'
                />
                <Form.Input
                  label='Last Name'
                  name='last'
                  placeholder='Last Name'
                  type='text'
                />
                <Form.Input
                  label='Chinese Name'
                  name='chinese'
                  placeholder='中文姓名'
                  type='text'
                />
                <Form.Select label='Gender' name='gender' options={genders} placeholder='Select gender' />
  
                <Form.Field>
                  <Grid.Column>
                    <Grid.Row>
                      <h5 style={{ paddingBottom: '5px' }}>Date of Birth</h5>
                    </Grid.Row>
                    <Grid.Row>
                      <div className='ui input'>
                        <DatePickerInput
                          displayFormat='MM/DD/YYYY'
                          returnFormat='YYYY-MM-DD'
                          className='my-react-component'
                          showOnInputClick
                          iconClassName='calendar icon'
                          onChange={this.onChange}
                          placeholder='Birthday'
                        />
                      </div>
                    </Grid.Row>
                  </Grid.Column>
                </Form.Field>
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
