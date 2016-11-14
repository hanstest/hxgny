import React from 'react'
import { Grid, Table, Header, Message } from 'semantic-ui-react'

class UserDetails extends React.Component {
  state = {}
  
  renderItem = (student) => {
    return (
      <Table.Row textAlign='center' key={student._id}>
        <Table.Cell>Student</Table.Cell>
        <Table.Cell>{student.first}</Table.Cell>
        <Table.Cell>{student.last}</Table.Cell>
        <Table.Cell>{student.chinese}</Table.Cell>
        <Table.Cell>{student.dob.toISOString().slice(0, 10)}</Table.Cell>
      </Table.Row>
    )
  }
  
  render() {
    return (
      <Grid textAlign='left' width={16}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Header as='h2' icon='student' content='家庭资料' />
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Grid.Column width={16}>
            {this.props.students.length > 0 && <Table size='small' celled selectable singleLine>
              <Table.Header>
                <Table.Row textAlign='center'>
                  <Table.HeaderCell>Role</Table.HeaderCell>
                  <Table.HeaderCell>First Name</Table.HeaderCell>
                  <Table.HeaderCell>Last Name</Table.HeaderCell>
                  <Table.HeaderCell>Chinese Name</Table.HeaderCell>
                  <Table.HeaderCell>Birthday</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              
              <Table.Body>
                {this.props.students.map((student) => {
                  return this.renderItem(student)
                })}
              </Table.Body>
            </Table>}
            {this.props.students.length === 0 && <Message info>No enrolled students!</Message>}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

UserDetails.propTypes = {
  students: React.PropTypes.array,
}

export default UserDetails
