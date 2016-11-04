import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Grid, Table, Header } from 'semantic-ui-react'
import genders from '../../../api/data/genders'

class StudentList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editting: null }
  }
  
  toggleEditing = (itemId) => {
    this.setState({ editing: itemId })
  }
  
  saveUpdate = (itemId, update) => {
     // TODO
  }
  
  renderItemOrEditField = (item) => {
    if (this.state.editing === item._id) {
      // Handle rendering our edit fields here.
    } else {
      return <div></div>
    }
  }
  
  render() {
    return (
      <Grid textAlign='left' width={16}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Header as='h2' icon='student' content='学生管理' />
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Grid.Column width={16}>
            {this.props.items.length > 0 && <Table size='small' celled selectable singleLine>
              <Table.Header>
                <Table.Row textAlign='center'>
                  <Table.HeaderCell>Modify</Table.HeaderCell>
                  <Table.HeaderCell>Delete</Table.HeaderCell>
                  <Table.HeaderCell>First Name</Table.HeaderCell>
                  <Table.HeaderCell>Last Name</Table.HeaderCell>
                  <Table.HeaderCell>Chinese Name</Table.HeaderCell>
                  <Table.HeaderCell>Gender</Table.HeaderCell>
                  <Table.HeaderCell>Birthday</Table.HeaderCell>
                  <Table.HeaderCell>Enrolled Courses</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.props.items.map((item) => {
                  return this.renderItemOrEditField(item)
                })}
              </Table.Body>
            </Table>}
            
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

StudentList.propTypes = {
  items: React.PropTypes.Array,
}

export default StudentList
