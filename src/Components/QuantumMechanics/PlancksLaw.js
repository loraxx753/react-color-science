import React from 'react'
import { Heading, Subhead, Text, Embed, List, ListItem } from 'Primitives'
import { BlockMath, InlineMath } from 'react-katex'
import { BoltzmannConstant } from 'Components/Physics/Constants'

export const Definition = props => (
  <React.Fragment>
    <Heading fontSize={3}>Planck's Law</Heading>
    <Text>
      The spectral radiance of a body, Bν, describes the amount of energy it gives off as radiation of different frequencies. It is measured in terms of the power emitted per unit area of the body, per unit solid angle that the radiation is measured over, per unit frequency. Planck showed that the spectral radiance of a body for frequency ν at absolute temperature T is given by
    </Text>
  </React.Fragment>
)

export const Equation = props => (
  <React.Fragment>
    <BlockMath>
      {props.math ||
        `B_{\\nu }(\\nu ,T)=\\frac{2hv^3}{c^2} \\frac{1}{e^\\frac{hv}{k_BT}-1}`}
    </BlockMath>
    <List>
      <ListItem><InlineMath math={`k_B = `} /></ListItem>
    </List>
  </React.Fragment>
)

export const References = props => (
  <React.Fragment>
    <Embed>
      <iframe
        title='spacetime'
        width='560'
        height='315'
        src='https://www.youtube.com/embed/tQSbms5MDvY'
        frameBorder='0'
        allowFullScreen
      />
    </Embed>
  </React.Fragment>
)

export const Notes = props => (
  <React.Fragment>
    <Text>Planck's Law quantizes light.</Text>
  </React.Fragment>
)

export default class extends React.Component {
  render = () => (
    <React.Fragment>
      <Definition {...this.props} />
      <Equation />
      <BoltzmannConstant.Definition />
    </React.Fragment>
  )
}

export const Rules = props => (
  <React.Fragment>
    <Subhead>Rule 1</Subhead>

    <Text>
      You can never know the position and momentum of an object at the same time.
    </Text>
    <BlockMath>momentum \oplus position</BlockMath>
    <Text>
      The uncertainties in position and momentum (
      <InlineMath math='\Delta x' /> and <InlineMath math='\Delta p' />
      ) are defined as being equal to the square root of their respective variances, so that:
    </Text>
    <BlockMath>
      {'\\Delta x\\Delta y=\\frac{\\hbar}{2}\\sqrt{\\frac{n^2\\pi ^2}{3}-2}'}
    </BlockMath>

    <Subhead>Rule 2</Subhead>

  </React.Fragment>
)

export const Bold = props => <b {...props} />

export const SchrödingerEquation = props => (
  <React.Fragment>
    <Subhead>Schrödinger Equation</Subhead>
    <Text>
      In quantum mechanics, the Schrödinger equation is a mathematical equation that describes the changes over time of a physical system in which quantum effects, such as wave–particle duality, are significant.
    </Text>
    <BlockMath>
      {'i\\hbar'}
    </BlockMath>

  </React.Fragment>
)
