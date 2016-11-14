import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Grid, Table, Header, Message } from 'semantic-ui-react'

const formatMobileNumber = (mobile) => {
  if (mobile === undefined) {
    return ''
  } else if (mobile.length !== 10) {
    return mobile
  }
  
  return '(' + mobile.slice(0, 3) + ') ' + mobile.slice(3, 6) + '-' + mobile.slice(6, 10)
}

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
    const user = Meteor.user()
    
    return (
      <Grid textAlign='left' width={16}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Header as='h2' icon='student' content='家庭资料' />
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as='h4' content='Basic Information' />
            <Table size='small' celled selectable singleLine>
              <Table.Header>
                <Table.Row textAlign='center'>
                  <Table.HeaderCell>Role</Table.HeaderCell>
                  <Table.HeaderCell>First Name</Table.HeaderCell>
                  <Table.HeaderCell>Last Name</Table.HeaderCell>
                  <Table.HeaderCell>Chinese Name</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Mobile</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
    
              <Table.Body>
                <Table.Row textAlign='center' key='father'>
                  <Table.Cell>Mother</Table.Cell>
                  <Table.Cell>{user.profile.name.mother.first}</Table.Cell>
                  <Table.Cell>{user.profile.name.mother.last}</Table.Cell>
                  <Table.Cell>{user.profile.name.mother.chinese}</Table.Cell>
                  <Table.Cell>{user.profile.name.mother.email}</Table.Cell>
                  <Table.Cell>{formatMobileNumber(user.profile.name.mother.mobile)}</Table.Cell>
                </Table.Row>
                <Table.Row textAlign='center' key='mother'>
                  <Table.Cell>Father</Table.Cell>
                  <Table.Cell>{user.profile.name.father.first}</Table.Cell>
                  <Table.Cell>{user.profile.name.father.last}</Table.Cell>
                  <Table.Cell>{user.profile.name.father.chinese}</Table.Cell>
                  <Table.Cell>{user.profile.name.father.email}</Table.Cell>
                  <Table.Cell>{formatMobileNumber(user.profile.name.father.mobile)}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as='h4' content='Student Information' />
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
