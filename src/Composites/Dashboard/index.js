import React from 'react'
import Color from 'Components/Color'
import { Row, Column, Box } from 'Primitives'
import { default as ColorMixer } from 'color'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      color: ColorMixer(`hsl(0,100%,50%)`),
      hue: props.hue || 0,
      saturation: props.saturation || 100,
      lightness: props.lightness || 50
    }
    this.handleHueChange.bind(this)
  }
  remixColor = () => {
    this.setState({
      color: ColorMixer(
        `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`
      )
    })
  }

  handleHueChange = hue => {
    this.setState({
      hue
    })
    this.remixColor()
  }

  handleSaturationChange = saturation => {
    this.setState({
      saturation
    })
    this.remixColor()
  }
  handleLightnessChange = lightness => {
    this.setState({
      lightness
    })
    this.remixColor()
  }

  render () {
    return (
      <React.Fragment>
        <Row>
          <Column>
            <Box p={4}>
              Hue ({this.state.color.hsl().hue().toString()}°)<Slider
                onChange={this.handleHueChange}
                defaultValue={0}
                min={0}
                max={269}
                trackStyle={{
                  backgroundColor: this.state.color.rotate(-15).hsl().string(),
                  height: 10
                }}
                handleStyle={{
                  borderColor: this.state.color.negate().hsl().string(),
                  height: 18,
                  width: 18,
                  backgroundColor: this.state.color.hsl().string()
                }}
                railStyle={{
                  backgroundColor: this.state.color.rotate(15).hsl().string(),
                  height: 10
                }}
              />
              Saturation (
              {this.state.color.hsl().saturationl().toString()}
              %)
              <Slider
                onChange={this.handleSaturationChange}
                defaultValue={100}
                min={0}
                max={100}
                trackStyle={{
                  borderColor: 'blue',
                  backgroundColor: this.state.color
                    .desaturate(0.5)
                    .hsl()
                    .string(),
                  height: 10
                }}
                handleStyle={{
                  borderColor: 'blue',
                  height: 18,
                  width: 18,
                  backgroundColor: this.state.color.hsl().string()
                }}
                railStyle={{
                  borderColor: 'blue',
                  backgroundColor: this.state.color
                    .saturate(0.5)
                    .hsl()
                    .string(),
                  height: 10
                }}
              />
              Lightness (
              {this.state.color.hsl().lightness().toString()}
              %)
              <Slider
                onChange={this.handleLightnessChange}
                defaultValue={50}
                min={0}
                max={100}
                trackStyle={{
                  borderColor: 'blue',

                  backgroundColor: this.state.color.darken(0.3).hsl().string(),
                  height: 10
                }}
                handleStyle={{
                  borderColor: 'blue',
                  height: 18,
                  width: 18,
                  backgroundColor: this.state.color.hsl().string()
                }}
                railStyle={{
                  backgroundColor: this.state.color.lighten(0.3).hsl().string(),
                  height: 10
                }}
              />
            </Box>
          </Column>
          <Column>
            <Color.Meta color={this.state.color.hsl().string()} />

          </Column>
        </Row>
      </React.Fragment>
    )
  }
}
