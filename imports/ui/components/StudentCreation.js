import { Meteor } from 'meteor/meteor'
import React from 'react'
import _ from 'lodash'
import { Grid, Button, Header, Form, Modal } from 'semantic-ui-react'
import { DatePickerInput } from 'rc-datepicker'
import { insertStudent } from '../../api/students/methods.js'
import { stripId } from '../../api/data/utils'

class StudentCreation extends React.Component {
  state = { key: (new Date()).getTime(), open: false }
  
  handleDateChange = (jsDate, dateString) => {}
  
  addStudent = (e, formData) => {
    e.preventDefault()
    
    insertStudent.call({
      familyId: Meteor.userId(),
      first: formData.first,
      last: formData.last,
      chinese: formData.chinese,
      gender: formData.gender,
      dob: new Date(formData.dob),
    }, (error) => {
      if (error) {
        console.log(error.reason)
      } else {
        this.setState({ open: true })
        // Close the modal in three seconds
        setTimeout(() => { this.setState({ key: (new Date()).getTime(), open: false }) }, 3000)
      }
    })
  }
  
  render() {
    const { open } = this.state
    const genders = _.map(this.props.genders, stripId)
    console.log(this.state.key)
    
    return (
      <Grid textAlign='left' width={16}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Header as='h2' icon='student' content='添加学生' />
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Grid.Column width={16}>
            <Form onSubmit={this.addStudent} key={this.state.key}>
              
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
  
                <Form.Select
                  label='Gender'
                  name='gender'
                  options={genders}
                  placeholder='Select gender'
                />
  
                <Form.Field>
                  <Grid.Column>
                    <Grid.Row>
                      <h5 style={{ paddingBottom: '5px' }}>Date of Birth</h5>
                    </Grid.Row>
                    <Grid.Row>
                      <div className='ui input'>
                        <DatePickerInput
                          displayFormat='YYYY-MM-DD'
                          className='my-react-component'
                          startMode='year'
                          showOnInputClick
                          iconClassName='calendar icon'
                          onChange={this.handleDateChange}
                          placeholder='YYYY-MM-DD'
                          name='dob'
                        />
                      </div>
                    </Grid.Row>
                  </Grid.Column>
                </Form.Field>
              </Form.Group>
              
              <Button primary type='submit'>添加学生</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
  
        <Grid.Row>
          <Modal size='small' dimmer='blurring' open={open}>
            <Modal.Header>
              Confirmation
            </Modal.Header>
            <Modal.Content>
              <p>Successfully created a new student!</p>
            </Modal.Content>
          </Modal>
        </Grid.Row>
      
      </Grid>
    )
  }
}

StudentCreation.propTypes = {
  genders: React.PropTypes.array,
}

export default StudentCreation
