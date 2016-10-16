import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'

// const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'))
//
// const userName = () => {
//   const user = Meteor.user()
//   const name = user && user.profile ? user.profile.name : ''
//   return user ? `${name.first} ${name.last}` : ''
// };

// export const AuthenticatedNavigation = () => (
//   <div>
//     <Nav>
//       <IndexLinkContainer to="/">
//         <NavItem eventKey={ 1 } href="/">Index</NavItem>
//       </IndexLinkContainer>
//       <LinkContainer to="/documents">
//         <NavItem eventKey={ 2 } href="/documents">Documents</NavItem>
//     </LinkContainer>
//     </Nav>
//     <Nav pullRight>
//       <NavDropdown eventKey={ 3 } title={ userName() } id="basic-nav-dropdown">
//         <MenuItem eventKey={ 3.1 } onClick={ handleLogout }>Logout</MenuItem>
//       </NavDropdown>
//     </Nav>
//   </div>
// );


export default class AuthenticatedNavigation extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
        <Menu secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
    )
  }
}
