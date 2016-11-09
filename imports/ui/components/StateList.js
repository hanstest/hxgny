import React from 'react'
import DataList from '../components/DataList'
import { insertState, updateState, removeState } from '../../api/states/methods'

const StateList = (props) => (
  <DataList
    dataType='州名'
    items={props.items}
    insertItem={insertState}
    updateItem={updateState}
    removeItem={removeState}
  />
)

StateList.propTypes = {
  items: React.PropTypes.array,
}

export default StateList
