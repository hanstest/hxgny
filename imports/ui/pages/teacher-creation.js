import React from 'react'
import { Grid, Button, Header, Form, Input, Message, Label, Confirm } from 'semantic-ui-react'

const states = [
  { text: 'CT', value: 'CT' },
  { text: 'DE', value: 'DE' },
  { text: 'MD', value: 'MD' },
  { text: 'NJ', value: 'NJ' },
  { text: 'NY', value: 'NY' },
  { text: 'PA', value: 'PA' },
]

class TeacherCreation extends React.Component {
  state = { serializedForm: {}, open: false };
  
  show = () => this.setState({ open: true })
  handleConfirm = () => {
    this.setState({ open: false })
    // TODO Add this teacher to database
  }
  
  handleCancel = () => this.setState({ open: false })

  handleChange = (e) => {
    e.preventDefault()
    // console.log('Value changed to ' + e.target.value)
    this.setState({ email: e.target.value })
  }

  handleSubmit = (e, serializedForm) => {
    e.preventDefault()
    
    this.show()
    
    this.setState({ serializedForm })
    // handleSignup(serializedForm)
  }
  
  searchUser = (value) => {
    // TODO Search user in database
  }
  
  render() {
    const { serializedForm, email } = this.state
    return (
      <Grid textAlign='left' columns={1}>
        <Grid.Row centered>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Header as='h2' icon='add user' content='新教师资料' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <Grid columns={2}>
                  <Grid.Row>
                    <Grid.Column>
                      <Input labelPosition='left'>
                        <Label basic>Email</Label>
                        <input
                          type='text'
                          name='email'
                          placeholder='first.last@example.com'
                          onChange={this.handleChange}
                        />
                        <Button primary onClick={this.searchUser(email)}>搜索账户</Button>
                      </Input>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Form.Field>
              <Form.Group widths='equal'>
                <Form.Input
                  label='First Name'
                  name='firstName'
                  placeholder='Enter your first name'
                />
                <Form.Input
                  label='Last Name'
                  name='lastName'
                  placeholder='Enter your last name'
                />
                <Form.Input
                  label='Chinese Name'
                  name='chineseName'
                  placeholder='输入中文姓名'
                />
              </Form.Group>

              <Header as='h4'>Mailing Address</Header>
              <Form.Field>
                <label>Street</label>
                <Input name='street' />
              </Form.Field>

              <Form.Group>
                <Form.Input label='City' name='city' />
                <Form.Select label='State' name='state' options={states} />
                <Form.Input label='Zip Code' name='zipcode' />
              </Form.Group>

              <Button primary type='submit'>Submit</Button>

              <Message>
                <pre>email: {JSON.stringify(email, null, 2)}</pre>
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

export default TeacherCreation
