import React from 'react'
import { ChromePicker } from 'react-color'
import Swatches from './Swatches'
import { default as Meta } from './Meta'
import { default as MixingBed } from './MixingBed'

export const ColorPicker = props => <ChromePicker {...props} />
const Color = { Swatches, Meta, MixingBed }
export default Color
