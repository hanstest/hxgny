import React from 'react'
import DataList from '../components/DataList'
import { insertClassroom, updateClassroom, removeClassroom } from '../../api/data/methods'

class ClassroomList extends React.Component {
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
        dataType='教室'
        items={this.props.items}
        refresh={this.refresh}
        insertItem={insertClassroom}
        updateItem={updateClassroom}
        removeItem={removeClassroom}
      />
    )
  }
}

ClassroomList.propTypes = {
  items: React.PropTypes.array,
}

export default ClassroomList
