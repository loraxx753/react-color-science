import React from 'react'
import { Heading } from 'Components/Primitives'
import { Consumer as Configuration } from 'Components/Configuration'

export default props => (
  <React.Fragment>
    <Heading>Electromagnetic Index</Heading>
    <Color />
  </React.Fragment>
)

export const Color = props => (
  <Configuration>
    {config => (
      <React.Fragment>
        <p>Color!</p>
        {console.log(config)}
      </React.Fragment>
    )}

  </Configuration>
)
