import React from 'react'
import { InlineMath } from 'react-katex'

export const BoltzmannConstant = {
  Name: props => 'Boltzmann Constant',
  Symbol: props => <InlineMath math={'k'} />,
  Definition: props => <p>something</p>
}
