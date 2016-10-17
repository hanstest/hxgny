import React from 'react'
import { Link } from 'react-router'
import { Grid, Form, Button, Input, Icon, Label, Menu } from 'semantic-ui-react'
import handleLogin from '../../modules/login'

export default class Login extends React.Component {
  state = { serializedForm: {} }

  // componentDidMount() {
  //   handleLogin({ component: this });
  // }


  handleSubmit = (e, serializedForm) => {
    e.preventDefault()
    this.setState({ serializedForm })
    // alert(JSON.stringify(serializedForm, null, 2));
    handleLogin(serializedForm)
  }


  render() {
    return (
      <Grid textAlign='left' columns={3}>
        <Grid.Row>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Email</label>
                <Input name='email' icon='mail' iconPosition='left' placeholder='david@example.com' />
              </Form.Field>

              <Form.Field>
                <div style={{diplay:'inline'}}>
                  <label>Password</label>
                  <Link style={{float:'right'}} to="/recover-password">Forgot Password?</Link>
                </div>
                <Input name='password' icon='lock' iconPosition='left' placeholder='password' />
              </Form.Field>

              <Button primary type='submit'>Submit</Button>
            </Form>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
