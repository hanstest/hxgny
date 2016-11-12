import React from 'react'
import _ from 'lodash'
import { Grid, Form, Button, Input, Header, Divider, Checkbox } from 'semantic-ui-react'
import handleSignup from '../../modules/signup'
import { stripId } from '../../api/data/utils'

class Signup extends React.Component {
  state = {}
  
  handleChange = (e, { value }) => this.setState({ value });

  handleSubmit = (e, serializedForm) => {
    e.preventDefault()
    this.setState({ serializedForm })
    handleSignup(serializedForm)
  }

  render() {
    const { value } = this.state
    const states = _.map(this.props.states, stripId)
    
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
              <Form.Group widths='equal'>
                <Form.Input label='Street' name='street' />
                <Form.Input label='City' name='city' />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Select label='State' name='state' options={states} />
                <Form.Input label='Zip Code' name='zip' />
              </Form.Group>

              <Button primary type='submit'>Submit</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

Signup.propTypes = {
  states: React.PropTypes.array,
}

export default Signup
