import React from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import CourseScheduling from './course-scheduling'
import TeacherList from './teacher-list'
import AddNewTeacher from '../components/add-new-teacher'

const activeItems = ['PersonalDetails', 'CourseScheduling']

class Account extends React.Component {
  state = { activeItemTop: '个人中心', activeItemLeft: 'PersonalDetails' }

  handleTopItemClick = (e, { name, index }) => {
    this.setState({ activeItemTop: name, activeItemLeft: activeItems[index] })
  };

  handleLeftItemClick = (e, { name, index }) => {
    this.setState({ activeItemLeft: name })
    activeItems[index] = name
  };

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
                name='排课管理'
                index={1}
                active={activeItemTop === '排课管理'}
                onClick={this.handleTopItemClick}
              />
            </Menu>

            <Segment attached='bottom'>
              <div hidden={activeItemTop !== '个人中心'}>
                <Grid>
                  <Grid.Column width={2}>
                    <Menu fluid pointing secondary vertical>
                      <Menu.Item
                        name='PersonalDetails'
                        index={0}
                        active={activeItemLeft === 'PersonalDetails'}
                        onClick={this.handleLeftItemClick}
                      />
                      <Menu.Item
                        name='CoursesEnrolled'
                        index={0}
                        active={activeItemLeft === 'CoursesEnrolled'}
                        onClick={this.handleLeftItemClick}
                      />
                    </Menu>
                  </Grid.Column>
                  <Grid.Column stretched width={14}>
                    <Segment>
                      User profile.
                    </Segment>
                  </Grid.Column>
                </Grid>
              </div>

              <div hidden={activeItemTop !== '教师管理'}>
                <Grid>
                  <Grid.Column width={3}>
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
                  <Grid.Column stretched width={13}>
                    <Segment>
                      <div hidden={activeItemLeft !== '添加教师'}>
                        <AddNewTeacher />
                      </div>
                      <div hidden={activeItemLeft !== '教师列表'}>
                        <TeacherList />
                      </div>
                    </Segment>
                  </Grid.Column>
                </Grid>
              </div>

              <div hidden={activeItemTop !== '排课管理'}>
                <Grid>
                  <Grid.Column width={3}>
                    <Menu fluid pointing secondary vertical>
                      <Menu.Item
                        name='CourseScheduling'
                        index={1}
                        active={activeItemLeft === 'CourseScheduling'}
                        onClick={this.handleLeftItemClick}
                      />
                      <Menu.Item
                        name='CourseCatalog'
                        index={1}
                        active={activeItemLeft === 'CourseCatalog'}
                        onClick={this.handleLeftItemClick}
                      />
                    </Menu>
                  </Grid.Column>
                  <Grid.Column stretched width={13}>
                    <Segment>
                      <div hidden={activeItemLeft !== 'CourseScheduling'}>
                        <CourseScheduling />
                      </div>
                      <div hidden={activeItemLeft !== 'CourseCatalog'}>
                        This is an stretched grid column. This segment will always match the tab height
                      </div>
                    </Segment>
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
