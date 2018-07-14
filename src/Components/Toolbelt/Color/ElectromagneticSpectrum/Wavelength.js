import React from 'react'
import { Heading, Card, Canvas } from 'Components/Primitives'
// import ft from 'fourier-transform'
import SineWaves from 'sine-waves'
import { goldenRatio } from 'utilities'
import Color from 'color'

// This'll be useful later
// const amplitudeMultiplier = props.color.hsl().object().s / 100

// const frequency = props.frequency || 440
// const size = 2 ** 2
// const sampleRate = props.sampleRate || 44100
// const waveform = new Float32Array(size)
// for (var i = 0; i < size; i++) {
//   waveform[i] = Math.sin(frequency * Math.PI * 2 * (i / sampleRate))
// }
// // get normalized magnitudes for frequencies from 0 to 22050 with interval 44100/1024 ≈ 43Hz
// this.state = {
//   color: props.color,
//   spectrum: ft(waveform),
//   waves: {},
//   sinewaves: {}
// }

// A traditional unit of measure used with rotating mechanical
// devices is revolutions per minute, abbreviated r/min or rpm.
// 60 rpm equals one hertz.

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      color: props.color,
      sinewaves: {}
    }
  }

  componentWillReceiveProps = props => {
    this.updateGraph(props.color)
  }

  updateGraph = color => {
    const amplitudeMultiplier = color.hsl().object().s / 100
    const timeMultiplier = color.hsl().object().l / 100
    const hue = color.hsl().object().h

    this.setState({
      sinewaves: new SineWaves({
        // Canvas Element
        el: document.getElementById('waves'),
        // General speed of entire wave system
        speed: 2 ** 3,
        // How many degress should we rotate all of the waves
        rotate: 0,
        // Ease function from left to right
        ease: 'Linear',
        // Specific how much the width of the canvas the waves should be
        // This can either be a number or a percent
        waveWidth: '100%',
        // An array of wave options
        waves: [
          {
            timeModifier: 10 * timeMultiplier, // This is multiplied againse `speed`
            lineWidth: 1, // Stroke width
            amplitude: 250 * amplitudeMultiplier, // How tall is the wave
            wavelength: hue, // How long is the wave
            segmentLength: goldenRatio * 2, // How smooth should the line be
            strokeStyle: this.state.color.hsl(), // Stroke color and opacity
            type: 'sine' // Wave type
          }
        ],
        // Perform any additional initializations here
        initialize: function () {},
        // This function is called whenver the window is resized
        resizeEvent: function () {
          // Here is an example on how to create a gradient stroke
          var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0)
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
          gradient.addColorStop(
            0.2,
            `hsla(${hue}, ${amplitudeMultiplier * 100}%, ${timeMultiplier * 100}%, 1)`
          )
          gradient.addColorStop(
            0.8,
            `hsla(${hue}, ${amplitudeMultiplier * 100}%, ${timeMultiplier * 100}%, 1)`
          )
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
          var index = -1
          var length = this.waves.length
          while (++index < length) {
            this.waves[index].strokeStyle = gradient
          }
        }
      })
    })
  }

  componentDidMount = () => {
    this.updateGraph(this.state.color)
  }

  render () {
    return (
      <Card bg={this.state.color.isDark() ? 'white' : 'gray'}>
        <Heading style={{ textAlign: 'center' }}>Wavelength</Heading>
        <Canvas id={'waves'} style={{ width: '100%' }} />
      </Card>
    )
  }
}

export const ColorToWaveLength = props => {
  return props.children('there')
}
