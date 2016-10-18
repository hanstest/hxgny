import React from 'react'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'

const CourseScheduling = () => {
  return (
    <Table compact celled definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>修改|删除</Table.HeaderCell>
          <Table.HeaderCell>课程编号</Table.HeaderCell>
          <Table.HeaderCell>学期</Table.HeaderCell>
          <Table.HeaderCell>班级名称</Table.HeaderCell>
          <Table.HeaderCell>老师姓名</Table.HeaderCell>
          <Table.HeaderCell>上课教室</Table.HeaderCell>
          <Table.HeaderCell>上课时间</Table.HeaderCell>
          <Table.HeaderCell>学生上限</Table.HeaderCell>
          <Table.HeaderCell>最低年龄</Table.HeaderCell>
          <Table.HeaderCell>学年学费</Table.HeaderCell>
          <Table.HeaderCell>学年杂费</Table.HeaderCell>
          <Table.HeaderCell>学年书费</Table.HeaderCell>
          <Table.HeaderCell>学期学费</Table.HeaderCell>
          <Table.HeaderCell>学期杂费</Table.HeaderCell>
          <Table.HeaderCell>学期书费</Table.HeaderCell>
          <Table.HeaderCell>注册状态</Table.HeaderCell>
          <Table.HeaderCell>修改日期</Table.HeaderCell>
          <Table.HeaderCell>修改人</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing>
            <Checkbox slider />
          </Table.Cell>
          <Table.Cell>1915</Table.Cell>
          <Table.Cell>September 14, 2013</Table.Cell>
          <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
          <Table.Cell>No</Table.Cell>
          <Table.Cell>No</Table.Cell>
          <Table.Cell>No</Table.Cell>
          <Table.Cell>No</Table.Cell>
          <Table.Cell>No</Table.Cell>
          <Table.Cell>No</Table.Cell>
          <Table.Cell>No</Table.Cell>
          <Table.Cell>No</Table.Cell>
          <Table.Cell>No</Table.Cell>
          <Table.Cell>No</Table.Cell>
          <Table.Cell>No</Table.Cell>
          <Table.Cell>No</Table.Cell>
          <Table.Cell>No</Table.Cell>
          <Table.Cell>No</Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell colSpan='4'>
            <Button floated='right' icon labelPosition='left' primary size='small'>
              <Icon name='user' /> Add User
            </Button>
            <Button size='small'>Approve</Button>
            <Button disabled size='small'>Approve All</Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}

export default CourseScheduling
