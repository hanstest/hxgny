import React from 'react'
import { Menu } from 'semantic-ui-react'
import { browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'

// TODO Needs to properly display user's name info after user login
// const userName = () => {
//   const user = Meteor.user()
//   const name = user && user.profile ? user.profile.name : ''
//   return user ? `${name.first} ${name.last}` : ''
// }

export default class AuthenticatedNavigation extends React.Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogout = () => Meteor.logout(() => browserHistory.push('/login'))

  render() {
    const { activeItem } = this.state;

    return (
        <Menu secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          {/*<Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />*/}
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleLogout} />
          </Menu.Menu>
        </Menu>
    )
  }
}
