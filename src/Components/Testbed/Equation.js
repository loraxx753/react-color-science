import React from 'react'
import { Text, Heading } from 'Primitives'
import { InlineMath, BlockMath } from 'react-katex'
import Color from 'Components/Color'

export default props => (
  <React.Fragment>
    <Heading color={'blue'}>Hi there!</Heading>
    <Text>{'here'}</Text>
    <InlineMath math={`\\int^a_b`} />
    <BlockMath>\int_0^\infty x^2 dx</BlockMath>
    <Color />
  </React.Fragment>
)
