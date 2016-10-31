import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Grid, Button, Header, Form, Message, Confirm } from 'semantic-ui-react'
import states from '../../api/data/states'
import genders from '../../api/data/genders'
import { browserHistory } from 'react-router'
import { Accounts } from 'meteor/accounts-base'
import { Roles } from 'meteor/alanning:roles'

class AddNewTeacher extends React.Component {
  state = {
    formData: {},
    open: false,
    userExists: false,
    didSearch: false,
    first: '',
    last: '',
    chinese: '',
  };
  
  show = () => this.setState({ open: true })
  
  handleConfirm = () => {
    this.setState({ open: false })
  }
  
  handleCancel = () => this.setState({ open: false })
  
  handleSubmit = (e, formData) => {
    this.setState({ didSearch: false, userExists: false })
    
    e.preventDefault()
    if (this.state.userExists) {
      return
    }
    
    const user = Meteor.users.findOne({ 'emails.address': formData.email })
    this.setState({ didSearch: true })
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
    this.setState({ formData })
    
    if (this.state.userExists) {
      // TODO Update this user.
    } else {
      const email = this.state.email
      const password = 'NewTeacher123'
      const profile = {
        name: {
          first: formData.first,
          last: formData.last,
          chinese: formData.chinese,
        },
        address: {
          street: formData.address,
          city: formData.city,
          state: formData.state,
          zipcode: formData.zipcode,
        },
      }
      const roles = ['teacher']
      
      const userId = Accounts.createUser({ email, password, profile })
      console.log('userId: ' + userId)
      Roles.addUsersToRoles(userId, roles)
    }
  }
  
  render() {
    const { formData } = this.state
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
              {this.state.didSearch && !this.state.userExists && <Button disabled>用户不存在</Button>}
            </Form>
          </Grid.Column>
        </Grid.Row>
        
        {this.state.didSearch && <Grid.Row>
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
                <Form.Input label='Zip Code' name='zipcode' type='text' defaultValue={this.state.zipcode} />
              </Form.Group>
              
              <Form.TextArea label='个人简介' name='description' placeholder='Tell us more about this teacher...' />
              {this.state.userExists ?
                <Button primary type='submit'>更新资料</Button> :
                <Button primary type='submit'>添加老师</Button>}
              
            </Form>

            <Message>
              <pre>Form Data: {JSON.stringify(formData, null, 2)}</pre>
            </Message>
          </Grid.Column>
        </Grid.Row>}
        
        <Confirm
          open={this.state.open}
          header='Please confirm the new teacher creation'
          content={'Create a new teacher with email: ' + this.state.email}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </Grid>
    )
  }
}

export default AddNewTeacher
