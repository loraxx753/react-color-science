import React from 'react'
import { Line } from '../../Primitives'
import { Lines } from '../../Primitives/Line'
import { default as Kinematic } from './Kinematic'

export default props => (
  <React.Fragment>
    <Lines>
      <Line>Heren's an example problem we can do.</Line>
      <Line>Let's say you want to know how fast you're going in a car.</Line>
    </Lines>
  </React.Fragment>
)

export const Car = props => {
    
  return (
    <React.Fragment>
      <Line>This is a Car</Line>
    </React.Fragment>
  )
}
