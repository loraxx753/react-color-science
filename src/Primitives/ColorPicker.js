import React from 'react'
import { Consumer as PrimitiveConsumer } from './ContextProvider'
export default class extends React.Component {
  render = () => (
    <PrimitiveConsumer>
      {primitives =>
        this.props.types.map((Picker, i) => (
          <Picker
            key={i}
            color={primitives.color}
            onChange={primitives.updateColor}
          />
        ))}
    </PrimitiveConsumer>
  )
}
