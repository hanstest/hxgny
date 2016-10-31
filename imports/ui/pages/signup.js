import React from 'react'
import { Grid, Form, Button, Input, Header, Divider, Checkbox, Message } from 'semantic-ui-react'
import handleSignup from '../../modules/signup'
import states from '../../api/data/states'

class Signup extends React.Component {
  state = { serializedForm: {} };

  handleChange = (e, { value }) => this.setState({ value });

  handleSubmit = (e, serializedForm) => {
    e.preventDefault()
    this.setState({ serializedForm })
    handleSignup(serializedForm)
  }

  render() {
    const { serializedForm, value } = this.state
    return (
      <Grid textAlign='left' columns={4}>
        <Grid.Row centered>
          <Grid.Column mobile={16} tablet={8} computer={6}>
            <Header as='h2' icon='add user' content='Create an Account' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
          <Grid.Column mobile={16} tablet={8} computer={6}>
            <Form onSubmit={this.handleSubmit}>

              <Form.Group widths='equal'>
                <Form.Input
                  label='Email'
                  name='email'
                  icon='mail'
                  iconPosition='left'
                  placeholder='david@example.com'
                />
                <Form.Input
                  type='password'
                  label='Password'
                  name='password'
                  icon='lock'
                  iconPosition='left'
                  placeholder='password'
                />
              </Form.Group>

              <Divider section />

              <Form.Field>
                <Grid columns={2} divided>
                  <Grid.Row>
                    <Grid.Column>
                      <Header as='h4'>Father / Legal Guardian</Header>
                      <label>First Name</label>
                      <Input name='fatherFirstName' />
                      <label>Last Name</label>
                      <Input name='fatherLastName' />
                      <label>中文姓名</label>
                      <Input name='fatherChineseName' />
                      <Checkbox name='fatherAsStudent' style={{ paddingTop: '5px' }} label='Add as student' toggle />
                    </Grid.Column>
                    <Grid.Column>
                      <Header as='h4'>Mother / Legal Guardian</Header>
                      <label>First Name</label>
                      <Input name='motherFirstName' />
                      <label>Last Name</label>
                      <Input name='motherLastName' />
                      <label>中文姓名</label>
                      <Input name='motherChineseName' />
                      <Checkbox name='motherAsStudent' style={{ paddingTop: '5px' }} label='Add as student' toggle />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Form.Field>

              <Form.Field>
                <Header as='h4'>Main Contact</Header>
                <Form.Group inline>
                  <Form.Radio
                    label='Father / Legal Guardian'
                    name='contact'
                    value='father'
                    checked={value === 'father'}
                    onChange={this.handleChange}
                  />
                  <Form.Radio
                    label='Mother / Legal Guardian'
                    name='contact'
                    value='mother'
                    checked={value === 'mother'}
                    onChange={this.handleChange}
                  />
                </Form.Group>
              </Form.Field>

              <Divider section />

              <Header as='h4'>Mailing Address</Header>
              <Form.Field>
                <label>Street</label>
                <Input name='street' />
              </Form.Field>

              <Form.Group>
                <Form.Input label='City' name='city' />
                <Form.Select label='State' name='state' options={states} />
                <Form.Input label='Zip Code' name='zip' />
              </Form.Group>

              <Button primary type='submit'>Submit</Button>

              <Message>
                <pre>serializedForm: {JSON.stringify(serializedForm, null, 2)}</pre>
              </Message>

            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Signup
