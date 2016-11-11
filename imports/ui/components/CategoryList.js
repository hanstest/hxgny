import React from 'react'
import DataList from '../components/DataList'
import { insertCategory, updateCategory, removeCategory } from '../../api/data/methods'

class CategoryList extends React.Component {
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
        dataType='课程类别'
        items={this.props.items}
        refresh={this.refresh}
        insertItem={insertCategory}
        updateItem={updateCategory}
        removeItem={removeCategory}
      />
    )
  }
}

CategoryList.propTypes = {
  items: React.PropTypes.array,
}

export default CategoryList
