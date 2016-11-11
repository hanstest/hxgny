import React from 'react'
import DataList from '../components/DataList'
import { insertSemester, updateSemester, removeSemester } from '../../api/data/methods'

class SemesterList extends React.Component {
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
        dataType='学期'
        items={this.props.items}
        refresh={this.refresh}
        insertItem={insertSemester}
        updateItem={updateSemester}
        removeItem={removeSemester}
      />
    )
  }
}

SemesterList.propTypes = {
  items: React.PropTypes.array,
}

export default SemesterList
