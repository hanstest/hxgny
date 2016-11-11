import React from 'react'
import DataList from '../components/DataList'
import { insertRegStatus, updateRegStatus, removeRegStatus } from '../../api/data/methods'

class RegStatusList extends React.Component {
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
        dataType='注册状态'
        items={this.props.items}
        refresh={this.refresh}
        insertItem={insertRegStatus}
        updateItem={updateRegStatus}
        removeItem={removeRegStatus}
      />
    )
  }
}

RegStatusList.propTypes = {
  items: React.PropTypes.array,
}

export default RegStatusList
