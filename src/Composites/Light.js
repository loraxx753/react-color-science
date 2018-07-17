import React from 'react'
import Color from 'Components/Toolbelt/Color'
// import { Swatches, Meta } from 'Components/Toolbelt/Color'
import { Consumer as Configuration } from 'Components/Configuration'
import { Drawer, Slider, Row, Box } from 'Primitives'

import { default as ColorProcessor } from 'color'

// wavelength = 620 - 170 / 270 * hueDegrees
export default class Light extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hsl: { h: 100, s: 100, l: 90 }
    }
    this.handleChange = this.handleChange.bind(this)
    this.changeHue = this.changeHue.bind(this)
  }

  changeHue = e => {
    const s = this.state.hsl.s
    const l = this.state.hsl.l
    this.setState({
      hsl: { h: parseFloat(e.target.value), s, l }
    })
  }
  changeLightness = e => {
    const h = this.state.hsl.h
    const s = this.state.hsl.s
    this.setState({
      hsl: { h, s, l: parseFloat(e.target.value) }
    })
  }
  changeSaturation = e => {
    const h = this.state.hsl.h
    const l = this.state.hsl.l
    this.setState({
      hsl: { h, s: parseFloat(e.target.value), l }
    })
  }

  handleChange = e => {
    console.log(e.target.value)
  }

  render () {
    return (
      <Configuration>
        {config => {
          return (
            <React.Fragment>
              <Options parent={this} />
              <Color.Meta color={this.state.hsl} />
              <Drawer
                open={false}
                side='right'
                p={3}
                color='black'
                bg='white'
                style={{ borderLeft: '1px solid rgba(100,100,100,0.1)' }}
              >
                {/* <Color.Swatches types={{ ...colorHierarchy }} /> */}

              </Drawer>
            </React.Fragment>
          )
        }}
      </Configuration>
    )
  }
}

const Options = ({ parent }) => (
  <React.Fragment>
    {' '}<Row my={3} style={{ border: '1px solid rgba(0,0,0,0.1)' }}>
      <Swatch bg={ColorProcessor('hsl(0, 100%, 50%)').rgb().toString()} />
      <Slider min={0} max={360} onChange={parent.changeHue} />
      <Swatch bg={ColorProcessor('hsl(360, 100%, 50%)').rgb().toString()} />
    </Row>
    <Row my={3} style={{ border: '1px solid rgba(0,0,0,0.1)' }}>
      <Swatch bg={ColorProcessor(parent.state.hsl).desaturate(1).toString()} />
      <Slider min={0} max={100} onChange={parent.changeSaturation} />
      <Swatch bg={ColorProcessor(parent.state.hsl).saturate(1).toString()} />
    </Row>
    <Row my={3} style={{ border: '1px solid rgba(0,0,0,0.1)' }}>
      <Swatch bg={ColorProcessor({ h: 0, s: 0, l: 0 }).hsl().toString()} />
      <Slider min={0} max={100} onChange={parent.changeLightness} />
      <Swatch
        style={{ border: '1px solid rgba(0,0,0,0.1)' }}
        bg={ColorProcessor({ h: 0, s: 0, l: 100 }).hsl().toString()}
      />
    </Row>
  </React.Fragment>
)

const Swatch = ({ color, ...props }) => <Box {...props} px={4} py={1} />
