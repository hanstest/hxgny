import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import AppNavigation from '../containers/app-navigation'

export default class App extends Component {
  // propTypes: {
  //   children: React.PropTypes.element.isRequired,
  // }
  render() {
    return (
      <div>
        <AppNavigation />
        <Grid>
          { this.props.children }
        </Grid>
      </div>
    )
  }
}
