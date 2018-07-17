import React from 'react'

import * as Rebass from 'rebass'
import { dashToPascal } from 'utilities'
import { default as PrimitiveLine } from './Line'
import { default as PrimitiveDebug } from './Debug'
import styled from 'styled-components'
import { default as PrimitiveGrid } from 'styled-components-grid'

const primitives = (r =>
  r
    .keys()
    // Filter out non-primitives
    .filter(key => !key.includes('theme.js'))
    // Assign according to filename
    .reduce(
      (acc, key) => ({
        ...acc,
        [dashToPascal(/\/(.*)\.js$/.exec(key)[1].replace('/index', ''))]: r(key)
          .default
      }),
      {}
    ))(require.context('./', true, /index\.js$/))

/**
 * Custom Exports
 */
export const Line = PrimitiveLine
export const Div = styled.div``
export const DarkMode = primitives.DarkMode || Rebass.DarkMode
export const Debug = PrimitiveDebug
export const Grid = PrimitiveGrid
export const Canvas = props => <canvas {...props}>{props.children}</canvas>
export const ListItem = props => <li {...props}>{props.children}</li>
export const List = props =>
  primitives.List || <ul {...props}>{props.children}</ul>

export const Absolute = primitives.Absolute || Rebass.Absolute
export const Arrow = primitives.Arrow || Rebass.Arrow
export const Avatar = primitives.Avatar || Rebass.Avatar
export const BackgroundImage =
  primitives.BackgroundImage || Rebass.BackgroundImage
export const Badge = primitives.Badge || Rebass.Badge
export const Banner = primitives.Banner || Rebass.Banner
export const Base = primitives.Base || Rebass.Base
export const BlockLink = primitives.BlockLink || Rebass.BlockLink
export const Blockquote = primitives.Blockquote || Rebass.Blockquote
export const Border = primitives.Border || Rebass.Border
export const Box = primitives.Box || Rebass.Box
export const Button = primitives.Button || Rebass.Button
export const ButtonCircle = primitives.ButtonCircle || Rebass.ButtonCircle
export const ButtonOutline = primitives.ButtonOutline || Rebass.ButtonOutline
export const ButtonTransparent =
  primitives.ButtonTransparent || Rebass.ButtonTransparent
export const Caps = primitives.Caps || Rebass.Caps
export const Card = primitives.Card || Rebass.Card
export const Carousel = primitives.Carousel || Rebass.Carousel
export const Checkbox = primitives.Checkbox || Rebass.Checkbox
export const Circle = primitives.Circle || Rebass.Circle
export const Close = primitives.Close || Rebass.Close
export const Code = primitives.Code || Rebass.Code
export const Column = primitives.Column || Rebass.Column
export const Container = primitives.Container || Rebass.Container
export const CSS = primitives.CSS || Rebass.CSS
export const Divider = primitives.Divider || Rebass.Divider
export const Donut = primitives.Donut || Rebass.Donut
export const Dot = primitives.Dot || Rebass.Dot
export const Drawer = primitives.Drawer || Rebass.Drawer
export const Embed = primitives.Embed || Rebass.Embed
export const Fixed = primitives.Fixed || Rebass.Fixed
export const Flex = primitives.Flex || Rebass.Flex
export const Group = primitives.Group || Rebass.Group
export const Heading = primitives.Heading || Rebass.Heading
export const Image = primitives.Image || Rebass.Image
export const Input = primitives.Input || Rebass.Input
export const Label = primitives.Label || Rebass.Label
export const Lead = primitives.Lead || Rebass.Lead
export const Link = primitives.Link || Rebass.Link
export const Measure = primitives.Measure || Rebass.Measure
export const Message = primitives.Message || Rebass.Message
export const Modal = primitives.Modal || Rebass.Modal
export const NavLink = primitives.NavLink || Rebass.NavLink
export const Overlay = primitives.Overlay || Rebass.Overlay
export const Panel = primitives.Panel || Rebass.Panel
export const Position = primitives.Position || Rebass.Position
export const Pre = primitives.Pre || Rebass.Pre
export const Progress = primitives.Progress || Rebass.Progress
export const Provider = Rebass.Provider
export const Radio = primitives.Radio || Rebass.Radio
export const Relative = primitives.Relative || Rebass.Relative
export const Root = primitives.Root || Rebass.Root
export const Row = primitives.Row || Rebass.Row
export const Samp = primitives.Samp || Rebass.Samp
export const Select = primitives.Select || Rebass.Select
export const Slider = primitives.Slider || Rebass.Slider
export const Small = primitives.Small || Rebass.Small
export const Sticky = primitives.Sticky || Rebass.Sticky
export const Subhead = primitives.Subhead || Rebass.Subhead
export const Switch = primitives.Switch || Rebass.Switch
export const Tab = primitives.Tab || Rebass.Tab
export const Tabs = primitives.Tabs || Rebass.Tabs
export const Text = primitives.Text || Rebass.Text
export const Textarea = primitives.Textarea || Rebass.Textarea
export const Toolbar = primitives.Toolbar || Rebass.Toolbar
export const Tooltip = primitives.Tooltip || Rebass.Tooltip
export const Truncate = primitives.Truncate || Rebass.Truncate
