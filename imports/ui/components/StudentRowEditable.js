import React from 'react'
import { Table, Button, Input, Select, Icon } from 'semantic-ui-react'

/**
 * Create a user
 * @param props properties for this component
 * @param props.student the student to render in this row
 * @param props.updateStudent callback to persist the changes to this student
 * @param props.removeStudent callback to remove the student from database
 * @param props.handleChangeFirst callback to update first name
 * @param props.handleChangeLast callback to update last name
 * @param props.handleChangeChinese callback to update Chinese name
 * @param props.handleChangeGender callback to update gender
 * @param props.showCourseStatus disable the Show button
 */
const StudentRowEditable = (props) => (
  <Table.Row textAlign='center' key={props.student._id}>
    <Table.Cell>
      <Icon link name='save' onClick={props.updateStudent} />
    </Table.Cell>
    <Table.Cell>
      <Icon link name='trash' onClick={props.removeStudent} />
    </Table.Cell>
    <Table.Cell>
      <Input
        name='first'
        type='text'
        defaultValue={props.student.first}
        onChange={props.handleChangeFirst}
      />
    </Table.Cell>
    <Table.Cell>
      <Input
        name='last'
        type='text'
        defaultValue={props.student.last}
        onChange={props.handleChangeLast}
      />
    </Table.Cell>
    <Table.Cell>
      <Input
        name='chinese'
        type='text'
        defaultValue={props.student.chinese}
        onChange={props.handleChangeChinese}
      />
    </Table.Cell>
    <Table.Cell>
      <Select
        name='gender'
        options={props.genders}
        defaultValue={props.student.gender}
        onChange={props.handleChangeGender}
      />
    </Table.Cell>
    <Table.Cell>
      {props.student.dob.toISOString().slice(0, 10)}
    </Table.Cell>
    <Table.Cell>
      <Button primary disabled={props.showCourseStatus === 'disabled'}>Show</Button>
    </Table.Cell>
  </Table.Row>
)

StudentRowEditable.propTypes = {
  student: React.PropTypes.object,
  genders: React.PropTypes.array,
  updateStudent: React.PropTypes.func,
  removeStudent: React.PropTypes.func,
  handleChangeFirst: React.PropTypes.func,
  handleChangeLast: React.PropTypes.func,
  handleChangeChinese: React.PropTypes.func,
  handleChangeGender: React.PropTypes.func,
  showCourseStatus: React.PropTypes.string,
}

export default StudentRowEditable
