import React from 'react'
import { Grid, Table, Checkbox, Message } from 'semantic-ui-react'

const renderCourse = (course, toggleCourse) => (
  <Table.Row textAlign='center' key={course._id}>
    <Table.Cell>{course.course}</Table.Cell>
    <Table.Cell>{course.teacher}</Table.Cell>
    <Table.Cell>{course.session}</Table.Cell>
    <Table.Cell>{course.term}</Table.Cell>
    <Table.Cell>${course.tuition}</Table.Cell>
    <Table.Cell>${course.bookFee}</Table.Cell>
    <Table.Cell>${course.regFee}</Table.Cell>
    <Table.Cell>${course.extraFee}</Table.Cell>
    <Table.Cell>
      <Checkbox
        toggle
        name={course._id}
        checked={course.checked}
        onChange={toggleCourse}
      />
    </Table.Cell>
  </Table.Row>
)

class CourseList extends React.Component {
  render() {
    return (
      <Grid.Column width={16}>
        {this.props.courses.length > 0 && <Table size='small' celled selectable singleLine>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell>课程名称</Table.HeaderCell>
              <Table.HeaderCell>教师姓名</Table.HeaderCell>
              <Table.HeaderCell>上课时间</Table.HeaderCell>
              <Table.HeaderCell>学制</Table.HeaderCell>
              <Table.HeaderCell>学费</Table.HeaderCell>
              <Table.HeaderCell>书本费</Table.HeaderCell>
              <Table.HeaderCell>注册费</Table.HeaderCell>
              <Table.HeaderCell>其它费用</Table.HeaderCell>
              <Table.HeaderCell>注册课程？</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          
          <Table.Body>
            {this.props.courses.map((course) => {
              return renderCourse(course, this.props.toggleCourse)
            })}
          </Table.Body>
        </Table>}
      {this.props.courses.length === 0 && <Message info>No courses available for registration!</Message>}
      </Grid.Column>
    )
  }
}

CourseList.propTypes = {
  courses: React.PropTypes.array,
  toggleCourse: React.PropTypes.func,
}

export default CourseList
