import React from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import CourseScheduling from './course-scheduling'
import TeacherList from './teacher-list'
import AddNewTeacher from '../components/add-new-teacher'
import AddStudent from '../components/add-student.js'

const activeItems = ['个人资料', '添加教师', '课程设置']

class Account extends React.Component {
  state = { activeItemTop: '个人中心', activeItemLeft: '个人资料' }

  handleTopItemClick = (e, { name, index }) => {
    this.setState({ activeItemTop: name, activeItemLeft: activeItems[index] })
  }

  handleLeftItemClick = (e, { name, index }) => {
    this.setState({ activeItemLeft: name })
    activeItems[index] = name
  }

  render() {
    const { activeItemTop, activeItemLeft } = this.state

    return (
      <Grid columns={1}>
        <Grid.Row centered>
          <Grid.Column mobile={16} tablet={16} computer={16}>

            <Menu attached='top' tabular>
              <Menu.Item
                name='个人中心'
                index={0}
                active={activeItemTop === '个人中心'}
                onClick={this.handleTopItemClick}
              />
              <Menu.Item
                name='教师管理'
                index={1}
                active={activeItemTop === '教师管理'}
                onClick={this.handleTopItemClick}
              />
              <Menu.Item
                name='课程管理'
                index={2}
                active={activeItemTop === '课程管理'}
                onClick={this.handleTopItemClick}
              />
            </Menu>

            <Segment attached='bottom'>
              <div hidden={activeItemTop !== '个人中心'}>
                <Grid>
                  <Grid.Column width={2}>
                    <Menu fluid pointing secondary vertical>
                      <Menu.Item
                        name='个人资料'
                        index={0}
                        active={activeItemLeft === '个人资料'}
                        onClick={this.handleLeftItemClick}
                      />
                      <Menu.Item
                        name='添加学生'
                        index={0}
                        active={activeItemLeft === '添加学生'}
                        onClick={this.handleLeftItemClick}
                      />
                      <Menu.Item
                        name='注册课程'
                        index={0}
                        active={activeItemLeft === '注册课程'}
                        onClick={this.handleLeftItemClick}
                      />
                    </Menu>
                  </Grid.Column>
                  <Grid.Column stretched width={14}>
                    <div>
                      <div hidden={activeItemLeft !== '个人资料'}>
                        Personal details
                      </div>
                      <div hidden={activeItemLeft !== '添加学生'}>
                        <AddStudent />
                      </div>
                      <div hidden={activeItemLeft !== '注册课程'}>
                        Register course
                      </div>
                    </div>
                  </Grid.Column>
                </Grid>
              </div>

              <div hidden={activeItemTop !== '教师管理'}>
                <Grid>
                  <Grid.Column width={2}>
                    <Menu fluid pointing secondary vertical>
                      <Menu.Item
                        name='添加教师'
                        index={1}
                        active={activeItemLeft === '添加教师'}
                        onClick={this.handleLeftItemClick}
                      />
                      <Menu.Item
                        name='教师列表'
                        index={1}
                        active={activeItemLeft === '教师列表'}
                        onClick={this.handleLeftItemClick}
                      />
                    </Menu>
                  </Grid.Column>
                  <Grid.Column stretched width={14}>
                    <div>
                      <div hidden={activeItemLeft !== '添加教师'}>
                        <AddNewTeacher />
                      </div>
                      <div hidden={activeItemLeft !== '教师列表'}>
                        <TeacherList />
                      </div>
                    </div>
                  </Grid.Column>
                </Grid>
              </div>

              <div hidden={activeItemTop !== '课程管理'}>
                <Grid>
                  <Grid.Column width={2}>
                    <Menu fluid pointing secondary vertical>
                      <Menu.Item
                        name='课程设置'
                        index={2}
                        active={activeItemLeft === '课程设置'}
                        onClick={this.handleLeftItemClick}
                      />
                      <Menu.Item
                        name='课程列表'
                        index={2}
                        active={activeItemLeft === '课程列表'}
                        onClick={this.handleLeftItemClick}
                      />
                    </Menu>
                  </Grid.Column>
                  <Grid.Column stretched width={14}>
                    <div>
                      <div hidden={activeItemLeft !== '课程设置'}>
                        <CourseScheduling />
                      </div>
                      <div hidden={activeItemLeft !== '课程列表'}>
                        This is an stretched grid column. This segment will always match the tab height
                      </div>
                    </div>
                  </Grid.Column>
                </Grid>
              </div>
            </Segment>

          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Account
