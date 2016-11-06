import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'

/**
 * Create a table row to display the basic information about a student
 * @param props properties for this component
 * @param props.student the student to render in this row
 */
const StudentRowDisplay = (props) => (
  <Table.Row textAlign='center' key={props.student._id}>
    <Table.Cell>
      <Icon link name='write' onClick={props.toggleEditing} />
    </Table.Cell>
    <Table.Cell>
      <Icon link name='trash' onClick={props.removeStudent} />
    </Table.Cell>
    <Table.Cell>{props.student.first}</Table.Cell>
    <Table.Cell>{props.student.last}</Table.Cell>
    <Table.Cell>{props.student.chinese}</Table.Cell>
    <Table.Cell>{props.student.gender}</Table.Cell>
    <Table.Cell>{props.student.dob.toISOString().slice(0, 10)}</Table.Cell>
    <Table.Cell><Button primary onClick={props.showCourses}>Show</Button></Table.Cell>
  </Table.Row>
)

StudentRowDisplay.propTypes = {
  student: React.PropTypes.object,
  toggleEditing: React.PropTypes.func,
  removeStudent: React.PropTypes.func,
  showCourses: React.PropTypes.func,
}

export default StudentRowDisplay
