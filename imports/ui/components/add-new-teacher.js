import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Grid, Button, Header, Form } from 'semantic-ui-react'
import states from '../../api/data/states'
import genders from '../../api/data/genders'
import NewUserConfirmation from './new-user-confirmation'

class AddNewTeacher extends React.Component {
  state = {
    open: false,
    userExists: false,
    didSearch: false,
    email: '',
    first: '',
    last: '',
    chinese: '',
    done: false,
  }
  
  handleSubmit = (e, formData) => {
    this.setState({ didSearch: false, userExists: false })
    
    e.preventDefault()
    if (this.state.userExists) {
      return
    }
    
    const user = Meteor.users.findOne({ 'emails.address': formData.email })
    this.setState({ didSearch: true, email: formData.email })
    if (user) {
      let userInfo = Object.assign({}, user.profile.name)
      userInfo = Object.assign(userInfo, user.profile.address)
      this.setState(userInfo)
      this.setState({ userExists: true })
    } else {
      this.setState({ userExists: false, first: '', last: '', chinese: '' })
    }
  }
  
  updateTeacherInfo = (e, formData) => {
    e.preventDefault()
    
    if (this.state.userExists) {
      // TODO Update this user.
      console.log('This user exists!!!')
    } else {
      const email = this.state.email
      const password = 'NewTeacher123'
      const profile = {
        name: {
          first: formData.first,
          last: formData.last,
          chinese: formData.chinese,
        },
        gender: formData.gender,
        address: {
          street: formData.street,
          city: formData.city,
          state: formData.state,
          zip: formData.zip,
        },
      }
      
      const user = { email, password, profile }
      const roles = ['teacher']
      Meteor.call('createNewUser', user, roles, (error, results) => {
        if (error) {
          console.log(error.reason)
        } else {
          this.setState({ done: true })
        }
      })
    }
  }
  
  render() {
    return (
      <Grid textAlign='left' width={16}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Header as='h2' icon='add user' content='新教师资料' />
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Grid.Column width={8}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                label='Email'
                name='email'
                icon='mail'
                iconPosition='left'
                placeholder='david@example.com'
              />
              <Button secondary type='submit'>查找账户</Button>
              {this.state.didSearch && !this.state.userExists && <Button disabled color='red'>用户不存在</Button>}
            </Form>
          </Grid.Column>
        </Grid.Row>
        
        {this.state.didSearch && !this.state.done && <Grid.Row>
          <Grid.Column width={16}>
            <Form onSubmit={this.updateTeacherInfo}>
              
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
  
              <Form.Group widths='equal'>
                <Form.Input label='Street' name='street' type='text' defaultValue={this.state.street} />
                <Form.Input label='City' name='city' type='text' defaultValue={this.state.city} />
                <Form.Select
                  label='State'
                  name='state'
                  options={states}
                  placeholder='Select state'
                  defaultValue={this.state.state}
                />
                <Form.Input label='Zip Code' name='zip' type='text' defaultValue={this.state.zip} />
              </Form.Group>
              
              <Form.TextArea label='个人简介' name='description' placeholder='Tell us more about this teacher...' />
              {
                this.state.userExists ?
                <Button primary type='submit'>更新资料</Button> :
                <Button primary type='submit'>添加老师</Button>
              }
            </Form>
          </Grid.Column>
        </Grid.Row>}
        
        {this.state.done && <Grid.Row>
          <Grid.Column width={16}>
            {this.state.done && <NewUserConfirmation message='Successfully created a new teacher!' />}
          </Grid.Column>
        </Grid.Row>}
        
      </Grid>
    )
  }
}

export default AddNewTeacher
