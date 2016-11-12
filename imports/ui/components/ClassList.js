import React from 'react'
import DataList from '../components/DataList'
import { insertClass, updateClass, removeClass } from '../../api/data/methods'

class ClassList extends React.Component {
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
        dataType='课程名称'
        items={this.props.items}
        refresh={this.refresh}
        insertItem={insertClass}
        updateItem={updateClass}
        removeItem={removeClass}
      />
    )
  }
}

ClassList.propTypes = {
  items: React.PropTypes.array,
}

export default ClassList
