import React from 'react'
import DataList from '../components/DataList'
import { insertSession, updateSession, removeSession } from '../../api/data/methods'

class SessionList extends React.Component {
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
        dataType='上课时间'
        items={this.props.items}
        refresh={this.refresh}
        insertItem={insertSession}
        updateItem={updateSession}
        removeItem={removeSession}
      />
    )
  }
}

SessionList.propTypes = {
  items: React.PropTypes.array,
}

export default SessionList
