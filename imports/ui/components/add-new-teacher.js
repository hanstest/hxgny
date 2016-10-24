// import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Grid, Button, Header, Form, Message, Confirm } from 'semantic-ui-react'

class AddNewTeacher extends React.Component {
  state = { serializedForm: {}, open: false, firstName: '' };
  
  show = () => this.setState({ open: true })
  
  handleConfirm = () => {
    this.setState({ open: false })
  }
  
  handleCancel = () => this.setState({ open: false })
  
  handleChange = (e) => {
    e.preventDefault()
    this.setState({ email: e.target.value })
  }
  
  handleSubmit = (e, serializedForm) => {
    e.preventDefault()
    this.setState({ serializedForm })

    console.log('Clicked search user: ' + serializedForm.email)
    const user = Meteor.users.findOne({ 'emails.address': serializedForm.email })
    console.log(user)
    if (user) {
      console.log('Found user')
      this.setState({ firstName: user.profile.name.first })
    }
  }
  
  searchUser = (email) => {
    // TODO Search user in database

  }
  
  render() {

    Meteor.subscribe('allUsers')
    const { serializedForm } = this.state
    return (
      <Grid textAlign='left' columns={1}>
        <Grid.Row centered>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Header as='h2' icon='add user' content='新教师资料' />
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row centered>
          <Grid.Column>
  
            <Form onSubmit={this.handleSubmit}>
              
              <Form.Input
                label='Email'
                name='email'
                icon='mail'
                iconPosition='left'
                placeholder='david@example.com'
              />
    
              <Button primary type='submit'>查找账户</Button>
    
              <Message>
                <pre>serializedForm: {JSON.stringify(serializedForm, null, 2)}</pre>
              </Message>
  
            </Form>

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
