import React from 'react'
import { Message } from 'semantic-ui-react'


/**
 * Confirm a user is successfully created.
 * @param props Component's properties
 * @param props.message Confirmation message
 */
const NewUserConfirmation = (props) => (
  <Message color='green' compact>
    <p>{props.message}</p>
  </Message>
)

export default NewUserConfirmation
