import React from 'react'
import DataList from '../components/DataList'
import { insertState, updateState, removeState } from '../../api/states/methods'

class StateList extends React.Component {
  state = {
    key: (new Date()).getTime(),
  }
  
  refresh = () => {
    this.setState({ key: (new Date()).getTime() })
  }
  
  render() {
    return (
      <DataList
        key={this.state.key}
        dataType='州名'
        items={this.props.items}
        refresh={this.refresh}
        insertItem={insertState}
        updateItem={updateState}
        removeItem={removeState}
      />
    )
  }
}

StateList.propTypes = {
  items: React.PropTypes.array,
}

export default StateList
