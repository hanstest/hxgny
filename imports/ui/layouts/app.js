import React from 'react'
import { Grid } from 'semantic-ui-react'
import AppNavigation from '../containers/app-navigation'

const App = () => (
  <div>
    <AppNavigation />
    <Grid>
      { this.props.children }
    </Grid>
  </div>
)

App.propTypes = {
  children: React.PropTypes.element.isRequired,
}

export default App
