import React from 'react'
import { Pre, Code } from 'Primitives'

export default props => (
  <React.Fragment>
    <Pre><Code>{JSON.stringify(props.children, null, 2)}</Code></Pre>
  </React.Fragment>
)
