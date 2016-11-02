import React from 'react'
import { insertStudent } from '../../api/students/methods.js'
import { Grid, Button, Header, Form } from 'semantic-ui-react'
import genders from '../../api/data/genders'
import NewUserConfirmation from './new-user-confirmation'
import {DatePicker, DatePickerInput} from 'rc-datepicker';



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
    date: '2/14/2008',
  }
  
  onChange = (jsDate, dateString) => {
    console.log(jsDate, dateString)
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
  
                <div>
                  <p>jsDate = {String(this.state.value)}</p>
                  <div className='ui input'>
                    <DatePickerInput
                      displayFormat='DD/MM/YYYY'
                      returnFormat='YYYY-MM-DD'
                      className='my-react-component'
                      defaultValue={this.state.yesterday}
                      valueLink={linkState(this, 'value')}
                      showOnInputClick
                      placeholder='placeholder'
                      locale='de'
                      iconClassName='calendar icon'
                    />
                  </div>
                </div>
                
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
