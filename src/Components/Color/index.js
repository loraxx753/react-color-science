import React from 'react'

import { Consumer as PrimitiveConsumer } from '../../Primitives/ContextProvider'

export default props => (
  <PrimitiveConsumer>
    {({ color }) => <p>sdfsdfds{color}</p>}
  </PrimitiveConsumer>
)
