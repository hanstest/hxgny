import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

// export const PublicNavigation = () => (
//   <Nav pullRight>
//     <LinkContainer to="signup">
//       <NavItem eventKey={ 1 } href="/signup">Sign Up</NavItem>
//     </LinkContainer>
//     <LinkContainer to="login">
//       <NavItem eventKey={ 2 } href="/login">Log In</NavItem>
//     </LinkContainer>
//   </Nav>
// );

export default class PublicNavigation extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const {activeItem} = this.state

    return (
      <Menu secondary>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick} />
          <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}
