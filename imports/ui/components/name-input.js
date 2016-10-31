import React from 'react'
import { Form } from 'semantic-ui-react'

const NameInput = (props) => {
  return (
    <Form.Group widths='equal'>
      <Form.Input
        label='First Name'
        name='first'
        placeholder='First Name'
        type='text'
        defaultValue={props.first}
      />
      <Form.Input
        label='Last Name'
        name='last'
        placeholder='Last Name'
        type='text'
        defaultValue={props.last}
      />
      <Form.Input
        label='Chinese Name'
        name='chinese'
        placeholder='中文姓名'
        type='text'
        defaultValue={props.chinese}
      />
    </Form.Group>
  )
}

export default NameInput
