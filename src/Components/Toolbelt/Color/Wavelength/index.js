import React from 'react'
import { Heading, Card, Canvas } from 'Components/Primitives'
import Color from 'color'
import ft from 'fourier-transform'
import SineWaves from 'sine-waves'

// While Mark Ransom and Franco Callari are completely right that you cannot recover the spectrum of a perceptual color, nor unambiguously map hue values to wavelengths, you could definitely piece something together if you just want the corresponding monochromatic wavelength.
//
// The part of the hue cycle between 270 and 360 is another problem. There is nothing corresponding to magenta in the light spectrum, so let's assume that we only use hue values between 0 and 270.
//
// Estimating that the usable part of the visible spectrum is 450-620nm, with wavelength L (in nm) and hue value H (in degrees), you can improvise this:
//
//  L = 620 - 170 / 270 * H
// 620 is the maximum wavelength, 170 is the wavelength range and 270 is the hue range.
//
// I think this should be in the right direction but I have only checked 4 or 5 colors. You might be able to get better results comparing between input hues and corresponding colors on a visible spectrum chart, and then adjusting the values somewhat.
export default class extends React.Component {
  constructor (props) {
    super(props)

    const frequency = props.frequency || 440
    const size = props.size || 1024
    const sampleRate = props.sampleRate || 44100
    const waveform = new Float32Array(size)
    for (var i = 0; i < size; i++) {
      waveform[i] = Math.sin(frequency * Math.PI * 2 * (i / sampleRate))
    }
    // get normalized magnitudes for frequencies from 0 to 22050 with interval 44100/1024 ≈ 43Hz
    this.state = {
      color: props.color,
      spectrum: ft(waveform),
      waves: {}
    }
  }

  componentDidMount = () => {
    const red = this.state.color.red()
    const green = this.state.color.green()
    const blue = this.state.color.blue()
    console.log(red, green, blue)
    const waves = new SineWaves({
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
      waveWidth: '50%',
      // An array of wave options
      waves: [
        {
          timeModifier: 1, // This is multiplied againse `speed`
          lineWidth: 1, // Stroke width
          amplitude: 50, // How tall is the wave
          wavelength: 46.8, // How long is the wave
          segmentLength: 3, // How smooth should the line be
          strokeStyle: this.state.color.rgb(), // Stroke color and opacity
          type: 'sine' // Wave type
        }
      ],
      // Perform any additional initializations here
      initialize: function () {},
      // This function is called whenver the window is resized
      resizeEvent: function () {
        // Here is an example on how to create a gradient stroke
        var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0)
        console.log(this.state)
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)')
        gradient.addColorStop(0.5, `rgba(${red}, ${green}, ${blue}, 1)`)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
        var index = -1
        var length = this.waves.length
        while (++index < length) {
          this.waves[index].strokeStyle = gradient
        }
      }
    })

    if (this.state) {
      // this.setState({
      //   waves: new SineWaves({
      //     // Canvas Element
      //     el: document.getElementById('waves'),
      //     // General speed of entire wave system
      //     speed: 2 ** 3,
      //     // How many degress should we rotate all of the waves
      //     rotate: 0,
      //     // Ease function from left to right
      //     ease: 'Linear',
      //     // Specific how much the width of the canvas the waves should be
      //     // This can either be a number or a percent
      //     waveWidth: '50%',
      //     // An array of wave options
      //     waves: [
      //       {
      //         timeModifier: 1, // This is multiplied againse `speed`
      //         lineWidth: 1, // Stroke width
      //         amplitude: 50, // How tall is the wave
      //         wavelength: 75, // How long is the wave
      //         segmentLength: 3, // How smooth should the line be
      //         strokeStyle: this.state.color.rgb(), // Stroke color and opacity
      //         type: 'sine' // Wave type
      //       }
      //     ],
      //     // Perform any additional initializations here
      //     initialize: function () {},
      //     // This function is called whenver the window is resized
      //     resizeEvent: function () {
      //       // Here is an example on how to create a gradient stroke
      //       var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0)
      //       gradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
      //       gradient.addColorStop(
      //         0.5,
      //         `rgba(${this.state.color.red()}, ${this.state.color.green()}, ${this.state.color.blue()}, 0.5)`
      //       )
      //       gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      //       var index = -1
      //       var length = this.waves.length
      //       while (++index < length) {
      //         this.waves[index].strokeStyle = gradient
      //       }
      //     }
      //   })
      // })
    }
  }

  render () {
    return (
      <Card>
        <Heading style={{ textAlign: 'center' }}>Wavelength</Heading>
        <Canvas id={'waves'} style={{ width: '100%' }} />
      </Card>
    )
  }
}

export const ColorToWaveLength = props => {
  return props.children('there')
}

export class Spectrum extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return <p>In Spectruuuuuum</p>
  }
}

// var spectrum = new Spectrum({
// 	container: document.body,

// 	//if undefined, new canvas will be created
// 	canvas: null,

// 	//existing webgl-context and some context options
// 	context: null,
// 	alpha: false,

// 	//enable render on every frame, disable for manual rendering
// 	autostart: true,

// 	//visible range
// 	maxDb: 0,
// 	minDb: -100,
// 	maxFrequency: 20000,
// 	minFrequency: 20,
// 	sampleRate: 44100,

// 	//perceptual loudness weighting, 'a', 'b', 'c', 'd', 'itu' or 'z' (see a-weighting)
// 	weighting: 'itu',

// 	//display grid, can be an object with plot-grid settings
// 	grid: true,

// 	//place frequencies logarithmically
// 	log: true,

// 	//smooth series of data
// 	smoothing: 0.75,

// 	//0 - bottom, .5 - symmetrically, 1. - top
// 	align: 0,

// 	//peak highlight balance
// 	balance: .5,

// 	//display max value trail
// 	trail: true,

// 	//style of rendering: line, bar or fill
// 	type: 'line',

// 	//width of the bar, applicable only in bar mode
// 	barWidth: 2,

// 	//colormap for the levels of magnitude. Can be a single color for flat fill.
// 	palette: ['black', 'white'],

// 	//by default transparent, to draw waveform
// 	background: null,

// 	//pan and zoom to show detailed view
// 	interactions: false
// });

// //pass values in decibels (-100...0 range)
// spectrum.set(magnitudes);

// //update style/options
// spectrum.update(options);

// //hook up every data set
// spectrum.on('data', (magnitudes, trail) => {});

// //for manual mode of rendering you may want to call this whenever you feel right
// spectrum.render();
// spectrum.draw();
