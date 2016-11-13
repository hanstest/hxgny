import React from 'react'
import { Menu } from 'semantic-ui-react'
import { browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor'

const userName = () => {
  const user = Meteor.user()
  const contact = user.profile.contact
  const name = user && user.profile ? user.profile.name[contact] : ''
  let displayName = 'User'
  if (name.chinese) {
    displayName = `${name.chinese}`
  } else {
    displayName = `${name.first} ${name.last}`
  }
  return displayName
}

export default class AuthenticatedNavigation extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogout = () => Meteor.logout(() => browserHistory.push('/login'))

  render() {
    const { activeItem } = this.state

    return (
        <Menu secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name={userName()} />
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleLogout} />
          </Menu.Menu>
        </Menu>
    )
  }
}
