import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Grid, Button, Header, Form, Message, Confirm } from 'semantic-ui-react'

const genders = [
  { text: 'Male', value: 'male' },
  { text: 'Female', value: 'female' },
]

const states = [
  { text: 'CT', value: 'CT' },
  { text: 'DE', value: 'DE' },
  { text: 'MD', value: 'MD' },
  { text: 'NJ', value: 'NJ' },
  { text: 'NY', value: 'NY' },
  { text: 'PA', value: 'PA' },
]

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
    e.preventDefault()
    if (this.state.userExists) {
      return
    }
    
    const user = Meteor.users.findOne({ 'emails.address': formData.email })
    this.setState({ didSearch: true })
    if (user) {
      this.setState({
        first: user.profile.name.first,
        last: user.profile.name.last,
        chinese: user.profile.name.chinese,
        street: user.profile.address.street,
        city: user.profile.address.city,
        state: user.profile.address.state,
        zipcode: user.profile.address.zipcode,
      })
      this.setState({ userExists: true })
    }
  }
  
  updateTeacherInfo = (e, formData) => {
    e.preventDefault()
    this.setState({ formData })
    
    if (this.state.userExists) {
      // TODO Update this user.
    } else {
      // TODO Create a new user.
      const user = {
        email: this.state.email,
        password: 'NewTeacher',
        profile: {
          name: {
            first: formData.first,
            last: formData.last,
            chinese: formData.chinese,
          },
          address: {},
        },
        roles: ['teacher'],
      }
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
            </Form>
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Grid.Column width={16}>
            <Form onSubmit={this.updateTeacherInfo}>
              <Form.Group widths='equal'>
                <Form.Input
                  label='First Name'
                  name='first'
                  placeholder='First Name'
                  type='text'
                  value={this.state.first}
                />
                <Form.Input
                  label='Last Name'
                  name='last'
                  placeholder='Last Name'
                  type='text'
                  value={this.state.last}
                />
                <Form.Input
                  label='Chinese Name'
                  name='chinese'
                  placeholder='中文姓名'
                  type='text'
                  value={this.state.chinese}
                />
                <Form.Select label='Gender' name='gender' options={genders} placeholder='Gender' />
              </Form.Group>
  
              <Form.Group widths='equal'>
                <Form.Input label='Street' name='street' type='text' value={this.state.street} />
                <Form.Input label='City' name='city' type='text' value={this.state.city} />
                <Form.Input label='State' name='state' type='text' value={this.state.state} />
                <Form.Input label='Zip Code' name='zipcode' type='text' value={this.state.zipcode} />
              </Form.Group>
              
              <Form.TextArea label='个人简介' name='description' placeholder='Tell us more about this teacher...' />
              <Button primary type='submit'>更新资料</Button>
            </Form>

            <Message>
              <pre>Form Data: {JSON.stringify(formData, null, 2)}</pre>
            </Message>
          </Grid.Column>
        </Grid.Row>
        
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
