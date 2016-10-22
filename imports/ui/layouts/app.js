import React from 'react'
import { Grid } from 'semantic-ui-react'
import AppNavigation from '../containers/app-navigation'

class App extends React.Component {
  propTypes: {
    children: React.PropTypes.element.isRequired,
  }

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

export default App
