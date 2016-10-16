import React from 'react'
import { Segment } from 'semantic-ui-react'
// import { Link } from 'react-router'
import PublicNavigation from './public-navigation'
import AuthenticatedNavigation from './authenticated-navigation'

export class AppNavigation extends React.Component {
  renderNavigation(hasUser) {
    return hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />
  }

  render() {
    return <Segment>
      { this.renderNavigation(this.props.hasUser) }
    </Segment>
  }
}

AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
}
