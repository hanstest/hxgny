import React from 'react'
import { Grid, Table, Icon, Message, Header, Button } from 'semantic-ui-react'

const renderCourse = (course, removeCourse) => (
  <Table.Row textAlign='center' key={course._id}>
    <Table.Cell>{course.course}</Table.Cell>
    <Table.Cell>{course.teacher}</Table.Cell>
    <Table.Cell>{course.session}</Table.Cell>
    <Table.Cell>{course.term}</Table.Cell>
    <Table.Cell>${course.tuition}</Table.Cell>
    <Table.Cell>${course.bookFee}</Table.Cell>
    <Table.Cell>${course.regFee}</Table.Cell>
    <Table.Cell>${course.extraFee}</Table.Cell>
    <Table.Cell><Icon link name='trash' onClick={() => removeCourse(course._id)} /></Table.Cell>
  </Table.Row>
)

class CourseList extends React.Component {
  calculateBalance = () => {
    let balance = 0.0
    this.props.courses.forEach((course) => {
      balance += course.tuition
      balance += course.bookFee
      balance += course.regFee
      balance += course.extraFee
    })
    return balance
  }
  
  render() {
    return (
      <Grid.Column width={16}>
        <Header as='h4'>Courses selected to register:</Header>
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
              <Table.HeaderCell>删除</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          
          <Table.Body>
            {this.props.courses.map((course) => {
              return renderCourse(course, this.props.removeCourse)
            })}
          </Table.Body>
  
          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan='9'>
                <Button floated='right' primary size='small'>
                  Checkout
                </Button>
                <Button floated='right' size='small'>
                  Subtotal ({this.props.courses.length} courses): ${this.calculateBalance()}
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>}
      {this.props.courses.length === 0 && <Message info>No courses are selected to register yet!</Message>}
      </Grid.Column>
    )
  }
}

CourseList.propTypes = {
  courses: React.PropTypes.array,
  removeCourse: React.PropTypes.func,
}

export default CourseList
