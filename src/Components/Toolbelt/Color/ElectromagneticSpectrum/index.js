import React from 'react'
import Wavelength from './Wavelength'

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

// RANDOM NOTES FOR DEV AND DOCS:
// Brightness = speed
// Saturation = amplitude
// Hue = Wavelength value

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return this.props.children
  }
}

export { Wavelength }
