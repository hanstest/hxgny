import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router'

class PublicNavigation extends React.Component {
  state = { activeItem: 'home' }

  handleSignupClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item active={activeItem === 'signup'}>
            <Link to='/signup'>Signup</Link>
          </Menu.Item>
          <Menu.Item active={activeItem === 'login'}>
            <Link to='/login'>Login</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default PublicNavigation
