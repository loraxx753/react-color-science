import React from 'react'

import { Text, Container, Row, Column } from '../Primitives'

export default props => (
  <Container>
    <Row>
      <Column>
        <Text>{props.children}</Text>
      </Column>
    </Row>
  </Container>
)

export const Lines = props => (
  <div style={{ borderBottom: 'solid black 1px' }}>
    {props.children}
  </div>
)
