import React from 'react'
import { Segment } from 'semantic-ui-react'
import PublicNavigation from './public-navigation'
import AuthenticatedNavigation from './authenticated-navigation'

export class AppNavigation extends React.Component {
  static renderNavigation(hasUser) {
    return hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />
  }

  render() {
    return (
      <Segment>
        { AppNavigation.renderNavigation(this.props.hasUser) }
      </Segment>
    )
  }
}

AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
}
