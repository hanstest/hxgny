import React from 'react'
import { Grid, Dropdown, Table, Button } from 'semantic-ui-react'

const optionsSemester = [
  { text: '2017 春季', value: '2017 Spring' },
  { text: '2016 秋季', value: '2016 Fall' },
  { text: '2016 春季', value: '2016 Spring' },
  { text: '所有学期', value: 'ALL' },
]

const optionsCourseType = [
  { text: '学前中文和CSL', value: 'ChinesePreCSL' },
  { text: '一至三年级中文课', value: 'Chinese123' },
  { text: '三年级以上中文课', value: 'ChineseAbove3' },
  { text: '中文AP', value: 'ChineseAP' },
  { text: '学前班文化课', value: 'CulturePreK' },
  { text: '小班少儿文体课', value: 'CultureSmallKid' },
  { text: '大班少儿文体课', value: 'CultureBigKid' },
  { text: '家长俱乐部', value: 'ParentsClub' },
  { text: '所有课程', value: 'ALL' },
]

const optionsRecordsPerPage = [
  { text: 10, value: 10 },
  { text: 20, value: 20 },
  { text: 50, value: 50 },
  { text: 100, value: 100 },
  { text: 200, value: 200 },
  { text: 500, value: 500 },
  { text: '所有记录', value: 'ALL' },
]

class CourseScheduling extends React.Component {
  state = {
    optionsSemester,
    optionsCourseType,
    optionsRecordsPerPage,
    semesterSelected: optionsSemester[0].value,
    courseTypeSelected: 'ALL',
    recordsPerPageSelected: 'ALL',
  }

  handleSemesterChange = (e, { value }) => this.setState({ semesterSelected: value })
  handleCourseTypeChange = (e, { value }) => this.setState({ courseTypeSelected: value })
  handleRecordsPerPageChange = (e, { value }) => this.setState({ recordsPerPageSelected: value })
  handleSearch = (semesterSelected, courseTypeSelected, recordsPerPageSelected) => {
    // console.log(semesterSelected)
    // console.log(courseTypeSelected)
    // console.log(recordsPerPageSelected)
  }
  handleAddCourse = (semesterSelected, courseTypeSelected, recordsPerPageSelected) => {
    // console.log(semesterSelected)
    // console.log(courseTypeSelected)
    // console.log(recordsPerPageSelected)
  }

  render() {
    const { semesterSelected, courseTypeSelected, recordsPerPageSelected } = this.state
    return (
      <div>
        <Grid>
          <Grid.Column width={3}>
            <Dropdown
              options={this.state.optionsSemester}
              placeholder='选择学期'
              selection
              fluid
              scrolling
              onChange={this.handleSemesterChange}
            />
          </Grid.Column>
          <Grid.Column width={3}>
            <Dropdown
              options={this.state.optionsCourseType}
              placeholder='选择课程类型'
              selection
              fluid
              scrolling
              onChange={this.handleCourseTypeChange}
            />
          </Grid.Column>
          <Grid.Column width={3}>
            <Dropdown
              options={this.state.optionsRecordsPerPage}
              placeholder='选择每页记录'
              selection
              fluid
              scrolling
              onChange={this.handleRecordsPerPageChange}
            />
          </Grid.Column>

          <Grid.Column width={2}>
            <Button.Group>
              <Button
                primary
                type='submit'
                onClick={this.handleSearch(semesterSelected, courseTypeSelected, recordsPerPageSelected)}
              >
                搜索课程
              </Button>
              <Button.Or />
              <Button
                positive
                type='submit'
                onClick={this.handleAddCourse(semesterSelected, courseTypeSelected, recordsPerPageSelected)}
              >
                添加课程
              </Button>
            </Button.Group>
          </Grid.Column>
        </Grid>

        <Table size='small' celled selectable singleLine>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell>修改</Table.HeaderCell>
              <Table.HeaderCell>删除</Table.HeaderCell>
              <Table.HeaderCell>学期</Table.HeaderCell>
              <Table.HeaderCell>班级</Table.HeaderCell>
              <Table.HeaderCell>老师</Table.HeaderCell>
              <Table.HeaderCell>教室</Table.HeaderCell>
              <Table.HeaderCell>时间</Table.HeaderCell>
              <Table.HeaderCell>上限</Table.HeaderCell>
              <Table.HeaderCell>年龄</Table.HeaderCell>
              <Table.HeaderCell>学年学费</Table.HeaderCell>
              <Table.HeaderCell>学期学费</Table.HeaderCell>
              <Table.HeaderCell>注册状态</Table.HeaderCell>
              <Table.HeaderCell>修改日期</Table.HeaderCell>
              <Table.HeaderCell>修改人名</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row textAlign='center'>
              <Table.Cell icon='save' />
              <Table.Cell icon='trash' />
              <Table.Cell>2016 秋季</Table.Cell>
              <Table.Cell>启蒙一班 (Pre-K C1)</Table.Cell>
              <Table.Cell>韩璐璐</Table.Cell>
              <Table.Cell>A202</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell icon='write' />
              <Table.Cell icon='trash' />
              <Table.Cell>2016 秋季</Table.Cell>
              <Table.Cell>启蒙一班 (Pre-K C1)</Table.Cell>
              <Table.Cell>韩璐璐</Table.Cell>
              <Table.Cell>A202</Table.Cell>
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
        </Table>
      </div>
    )
  }
}

export default CourseScheduling
