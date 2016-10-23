import React from 'react'
import { Message } from 'semantic-ui-react'


class TeacherConfirmation extends React.Component {
  render() {
    return (
      <Message>
        <pre>email: {JSON.stringify(email, null, 2)}</pre>
        <pre>serializedForm: {JSON.stringify(serializedForm, null, 2)}</pre>
      </Message>
    )
  }
}

export default TeacherConfirmation
