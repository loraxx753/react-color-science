import React from 'react'
import { Heading, Subhead } from 'Components/Primitives'
import { ObjectMap, capitalize } from 'utilities'

export default props => (
  <React.Fragment>
    <Heading>Mixing Bed</Heading>
    <Subhead>
      Currently mixing
      {' '}
      {Object.keys(props.colors).map(name => capitalize(name)).join(' + ')}
    </Subhead>
    <ObjectMap input={props.colors}>
      {(color, name, i) => (
        <React.Fragment>
          <p>{name}</p>
          <p>{color}</p>

        </React.Fragment>
      )}
    </ObjectMap>
  </React.Fragment>
)
