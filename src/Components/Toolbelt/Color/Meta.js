import React from 'react'
import { Heading, Panel, Grid, Box, Subhead, Row, Column } from 'Primitives'
import { capitalize } from 'utilities'
import Color from 'color'
import math from 'mathjs'
import ElectromagneticSpectrum, { Wavelength } from './ElectromagneticSpectrum'

const round = num => math.round(num, 2)

export default props => {
  const color = Color.hsl(props.color)

  return (
    <Grid>
      <Grid.Unit size={1}>
        <Panel p={2}>
          <Panel.Header>
            <Heading>
              Color Information {color.hsl().toString()}
            </Heading>

          </Panel.Header>
          <Box p={3}>
            <p>
              {`${capitalize(color.keyword() || 'unknown')} is a  ${color.isDark() ? 'dark' : 'light'} color.`}
            </p>
            <Row>
              <Column>
                <Box bg={color.hsl().toString()} p={4} />
                <ElectromagneticSpectrum>
                  <Wavelength color={color} />
                </ElectromagneticSpectrum>
              </Column>
            </Row>
          </Box>
        </Panel>
      </Grid.Unit>
    </Grid>
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
)
