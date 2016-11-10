import React from 'react'
import DataList from '../components/DataList'
import { insertTerm, updateTerm, removeTerm } from '../../api/data/methods'

class TermList extends React.Component {
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
        insertItem={insertTerm}
        updateItem={updateTerm}
        removeItem={removeTerm}
      />
    )
  }
}

TermList.propTypes = {
  items: React.PropTypes.array,
}

export default TermList
