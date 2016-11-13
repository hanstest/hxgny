import React from 'react'
import { Grid, Table, Header, Modal, Button, Icon, Input, Menu } from 'semantic-ui-react'

const NEW_DATA_ID = 'NEW_DATA_ID'
const ITEMS_PER_PAGE = 10

class DataList extends React.Component {
  state = {
    editing: null,
    update: null,
    itemId: null,
    open: false,
    confirmed: false,
    items: this.props.items,
  }
  
  toggleEditing = (itemId) => {
    this.setState({ editing: itemId, update: null })
  }
  
  handleChangeText = (event) => {
    const newUpdate = Object.assign(this.state.update || {}, { text: event.target.value })
    this.setState({ update: newUpdate })
  }
  
  handleChangeValue = (event) => {
    const newUpdate = Object.assign(this.state.update || {}, { value: event.target.value })
    this.setState({ update: newUpdate })
  }
  
  handleInsertItem = (item) => {
    const itemToInsert = {
      text: this.state.update.text,
      value: this.state.update.value,
    }
    this.props.insertItem.call(itemToInsert, (error) => {
      if (error) {
        console.log(error.reason)
      } else {
        this.props.refresh()
      }
    })
  }
  
  handleUpdateItem = (itemId) => {
    if (this.state.update === null) {
      this.setState({ editing: null })
    }
    
    this.props.updateItem.call({
      _id: itemId,
      update: this.state.update,
    }, (error) => {
      if (error) {
        console.log(error.reason)
      } else {
        this.setState({ editing: null })
        this.props.refresh()
      }
    })
  }
  
  showConfirmation = (itemId) => {
    this.setState({ open: true, itemId })
  }
  
  handleRemoveItem = () => {
    this.props.removeItem.call({
      _id: this.state.itemId,
    }, (error) => {
      if (error) {
        console.log(error.reason)
      } else {
        this.setState({ open: false, itemId: null })
        this.props.refresh()
      }
    })
  }
  
  addNewItemRow = () => {
    const item = {
      _id: NEW_DATA_ID,
      text: '',
      value: '',
    }
    const items = this.state.items.splice(0)
    items.push(item)
    this.setState({ items, editing: NEW_DATA_ID })
  }
  
  handleAbort = (itemId) => {
    const items = this.state.items.splice(0)
    let indexToRemove = null
    this.state.items.forEach((item, index) => {
      if (item._id === NEW_DATA_ID) {
        indexToRemove = index
      }
    })
    items.splice(indexToRemove, 1)
    this.setState({ items })
  }
  
  renderItemOrEditField = (item) => {
    const itemId = item._id
    if (this.state.editing === itemId) {
      return (
        <Table.Row textAlign='center' key={itemId}>
          <Table.Cell>
            <Input name='text' type='text' defaultValue={item.text} onChange={this.handleChangeText} />
          </Table.Cell>
          <Table.Cell>
            <Input name='value' type='text' defaultValue={item.value} onChange={this.handleChangeValue} />
          </Table.Cell>
          {itemId === NEW_DATA_ID ?
            <Table.Cell><Icon link name='plus' onClick={() => this.handleInsertItem(item)} /></Table.Cell> :
            <Table.Cell><Icon link name='save' onClick={() => this.handleUpdateItem(itemId)} /></Table.Cell>
          }
          {itemId === NEW_DATA_ID ?
            <Table.Cell><Icon link name='remove' onClick={() => this.handleAbort(itemId)} /></Table.Cell> :
            <Table.Cell><Icon link name='trash' onClick={() => this.showConfirmation(itemId)} /></Table.Cell>
          }
        </Table.Row>
      )
    }
    
    return (
      <Table.Row textAlign='center' key={itemId}>
        <Table.Cell>{item.text}</Table.Cell>
        <Table.Cell>{item.value}</Table.Cell>
        <Table.Cell><Icon link name='write' onClick={() => this.toggleEditing(itemId)} /></Table.Cell>
        <Table.Cell><Icon link name='trash' onClick={() => this.showConfirmation(itemId)} /></Table.Cell>
      </Table.Row>
    )
  }
  
  close = () => this.setState({ open: false })
  
  render() {
    const { open, items } = this.state
    return (
      <Grid textAlign='left' width={16}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Header as='h2' content={this.props.dataType + '管理'} />
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Grid.Column width={8}>
            <Table size='small' celled selectable singleLine>
              <Table.Header>
                <Table.Row textAlign='center'>
                  <Table.HeaderCell>Text</Table.HeaderCell>
                  <Table.HeaderCell>Value</Table.HeaderCell>
                  <Table.HeaderCell>Modify</Table.HeaderCell>
                  <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              
              <Table.Body>
                {items.map((item) => {
                  return this.renderItemOrEditField(item)
                })}
              </Table.Body>
  
              <Table.Footer fullWidth>
                <Table.Row>
                  <Table.HeaderCell colSpan='4'>
                    <Button floated='right' primary onClick={this.addNewItemRow}>Add</Button>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Modal size='small' dimmer='blurring' open={open} onClose={this.close}>
            <Modal.Header>
              Delete data item
            </Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to delete this data item?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button
                negative
                icon='remove'
                labelPosition='right'
                content='No'
                onClick={() => this.setState({ open: false }) }
              />
              <Button
                positive
                icon='checkmark'
                labelPosition='right'
                content='Yes'
                onClick={this.handleRemoveItem}
              />
            </Modal.Actions>
          </Modal>
        </Grid.Row>
      </Grid>
    )
  }
}

DataList.propTypes = {
  dataType: React.PropTypes.string,
  items: React.PropTypes.array,
  refresh: React.PropTypes.func,
  insertItem: React.PropTypes.object,
  updateItem: React.PropTypes.object,
  removeItem: React.PropTypes.object,
}

export default DataList
