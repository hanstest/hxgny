import React from 'react'
import { Link } from 'react-router'
import { Grid, Form, Button, Input, Header, Divider } from 'semantic-ui-react'
import handleLogin from '../../modules/login'

class Login extends React.Component {
  handleSubmit = (e, serializedForm) => {
    e.preventDefault()
    this.setState({ serializedForm })
    // alert(JSON.stringify(serializedForm, null, 2));
    handleLogin(serializedForm)
  };

  render() {
    return (
      <Grid textAlign='left' columns={4}>
        <Grid.Row centered>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Header as='h2' icon='sign in' content='Login to HXGNY' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Email</label>
                <Input name='email' icon='mail' iconPosition='left' placeholder='david@example.com' />
              </Form.Field>

              <Form.Field>
                <div style={{ display: 'inline', fontWeight: 'bold' }}>
                  <label>Password</label>
                  <Link style={{ float: 'right' }} to='/recover-password'>Forgot Password?</Link>
                </div>
                <Input type='password' name='password' icon='lock' iconPosition='left' placeholder='password' />
              </Form.Field>

              <Button primary type='submit'>Submit</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Divider />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <div>
              Don't have an account? <Link to='/signup'>Sign up now >></Link>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Login
