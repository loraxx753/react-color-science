import React from 'react'
import {
  Heading,
  Panel,
  Box,
  Subhead,
  Row,
  Div,
  Column,
  Flex
} from 'Primitives'
import Color from 'color'
import namer from 'color-namer'
// import * as space from 'color-space'

import math from 'mathjs'
import ElectromagneticSpectrum, {
  Wavelength
} from 'Components/ElectromagneticSpectrum'
import Names from './Names'
import { capitalize } from 'utilities'

const round = num => math.round(num, 2)

export default props => {
  const color = Color.hsl(props.color)
  const names = namer(props.color)

  return (
    <Div style={{ maxWidth: '1024px' }}>
      <Panel p={2}>
        <Panel.Header>
          <Heading>
            {capitalize(color.keyword())}
          </Heading>
        </Panel.Header>
        <Box p={3}>
          <Flex justifyContent={'center'} bg={color.hsl().toString()} p={4}>
            {color.rgb().toString()}
          </Flex>
          <ElectromagneticSpectrum>
            <Wavelength color={color} />
          </ElectromagneticSpectrum>
          <Names names={names} />

        </Box>
      </Panel>
    </Div>
  )
}

export const Values = ({ color }) => (
  <Row>
    <Column>
      <Subhead>RGB</Subhead>

      <p>Red: {round(color.red() / 255) * 100}%</p>
      <p>Green: {round(color.green() / 255) * 100}%</p>
      <p>Blue: {round(color.blue() / 255 * 100)}%</p>
    </Column>
    <Column>
      <Subhead>HSL</Subhead>

      <p>Hue: {color.hue()}º</p>
      <p>Saturation: {Math.round(color.saturationl())}%</p>
      <p>Value: {Math.round(color.saturationv())}%</p>

    </Column>
    <Column>
      <Subhead>CMYK</Subhead>

      <p>Cyan: {color.cyan()}%</p>
      <p>Magenta: {color.magenta()}%</p>
      <p>Yellow: {color.yellow()}%</p>
      <p>Key: {color.black()}%</p>

    </Column>
  </Row>
)
