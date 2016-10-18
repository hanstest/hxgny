import React from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import CourseScheduling from './course-scheduling'

let activeItems = ['PersonalDetails', 'CourseScheduling'];

class Account extends React.Component {
  state = { activeItemTop: 'ProfileDetails', activeItemLeft: 'PersonalDetails' };

  handleTopItemClick = (e, { name, index }) => {
    this.setState({ activeItemTop: name, activeItemLeft: activeItems[index] })
  };

  handleLeftItemClick = (e, { name, index }) => {
    this.setState({ activeItemLeft: name });
    activeItems[index] = name;
  };

  render() {
    const { activeItemTop, activeItemLeft } = this.state;

    return (
      <Grid columns={1}>
        <Grid.Row centered>
          <Grid.Column mobile={16} tablet={16} computer={14}>

            <Menu attached='top' tabular>
              <Menu.Item name='ProfileDetails' index={0} active={activeItemTop === 'ProfileDetails'} onClick={this.handleTopItemClick} />
              <Menu.Item name='CourseManagement' index={1} active={activeItemTop === 'CourseManagement'} onClick={this.handleTopItemClick} />
            </Menu>

            <Segment attached='bottom'>
              <div hidden={activeItemTop !== 'ProfileDetails'}>
                <Grid>
                  <Grid.Column width={3}>
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
                  <Grid.Column stretched width={13}>
                    <Segment>
                      User profile.
                    </Segment>
                  </Grid.Column>
                </Grid>
              </div>

              <div hidden={activeItemTop !== 'CourseManagement'}>
                <Grid>
                  <Grid.Column width={3}>
                    <Menu fluid pointing secondary vertical>
                      <Menu.Item
                        name='CourseScheduling'
                        index={1}
                        active={activeItemLeft === 'CourseScheduling'}
                        onClick={this.handleLeftItemClick} />
                      <Menu.Item
                        name='CourseCatalog'
                        index={1}
                        active={activeItemLeft === 'CourseCatalog'}
                        onClick={this.handleLeftItemClick} />
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
