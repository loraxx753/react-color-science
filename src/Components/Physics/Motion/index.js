import React from 'react'
import { Line } from '../../Primitives'
import { default as MotionExample } from './Example'
import { Lines } from '../../Primitives/Line'

export default props => (
  <React.Fragment>
    <Lines>
      <Line>In Motion. Let's do some science shit!</Line>
      <Line>First we're going to need some equations and stuff.</Line>
    </Lines>
    <MotionExample />
  </React.Fragment>
)
