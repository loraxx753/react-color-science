import React from 'react'
import {
  Heading,
  Panel,
  Grid,
  Box,
  Subhead,
  Row,
  Column,
  Card,
  Debug,
  Text
} from 'Components/Primitives'
import { capitalize } from 'utilities'
import Color from 'color'
import math from 'mathjs'
import ft from 'fourier-transform'
import { default as GlSpectrum } from 'gl-spectrum'
import Wavelength from './Wavelength'

const round = num => math.round(num, 2)

export default props => {
  const colorName = Object.keys(props.color).shift()
  const color = Color(props.color[colorName])

  return (
    <Grid>
      <Grid.Unit size={3 / 4}>
        <Panel p={2}>
          <Panel.Header>
            <Heading>
              Color Information for
              {' '}
              <span style={{ color: props.color[colorName] }}>
                {capitalize(colorName)}
              </span>
            </Heading>
          </Panel.Header>
          <Box p={3}>
            <p>
              {capitalize(colorName)} is {color.isDark() ? 'dark' : 'light'}
            </p>
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
                <p>Saturation: {round(color.saturationl())}%</p>
                <p>Value: {round(color.saturationv())}%</p>

              </Column>
              <Column>
                <Subhead>CMYK</Subhead>

                <p>Cyan: {color.cyan()}%</p>
                <p>Magenta: {color.magenta()}%</p>
                <p>Yellow: {color.yellow()}%</p>
                <p>Key: {color.black()}%</p>

              </Column>
            </Row>
            <Row>
              <Column>
                <Wavelength color={color} />
              </Column>
            </Row>
          </Box>
        </Panel>
      </Grid.Unit>
    </Grid>
  )
}
