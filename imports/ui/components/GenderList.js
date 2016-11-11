import React from 'react'
import DataList from '../components/DataList'
import { insertGender, updateGender, removeGender } from '../../api/data/methods'

class GenderList extends React.Component {
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
        dataType='性别'
        items={this.props.items}
        refresh={this.refresh}
        insertItem={insertGender}
        updateItem={updateGender}
        removeItem={removeGender}
      />
    )
  }
}

GenderList.propTypes = {
  items: React.PropTypes.array,
}

export default GenderList
