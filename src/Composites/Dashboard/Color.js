import React from 'react'
import chroma from 'chroma-js'
import namer from 'color-namer'
import Mousetrap from 'mousetrap'
import {
  Debug,
  Column,
  Row,
  ColorPicker,
  Consumer,
  Box,
  Card,
  BackgroundImage,
  Subhead,
  Small,
  Progress,
  Divider,
  List,
  ListItem,
  Button,
  Drawer
} from 'Primitives'
// http://casesandberg.github.io/react-color/
import {
  AlphaPicker,
  BlockPicker,
  ChromePicker,
  CirclePicker,
  CompactPicker,
  GithubPicker,
  HuePicker,
  MaterialPicker,
  PhotoshopPicker,
  SketchPicker,
  SliderPicker,
  SwatchesPicker,
  TwitterPicker
} from 'react-color'
import { Heading, Text, Caps } from 'Primitives'

export default class extends React.Component {
  state = {
    color: '#fff',
    openDrawers: false
  }
  componentDidMount = () => {
    Mousetrap.bind('up up down down left right left right b a enter', () => {
      console.log('konami code')
    })
    Mousetrap.bind('command+j', () => {
      this.setState({
        openDrawers: !this.state.openDrawers
      })
    })
  }

  render = () => (
    <Consumer.Primitives>
      {primitives => {
        const color = {
          chroma: chroma(primitives.color),
          names: namer(primitives.color)
        }
        return (
          <React.Fragment>
            <Heading>Color Picker</Heading>

            <ColorPicker
              types={[
                // AlphaPicker,
                // BlockPicker,
                // ChromePicker,
                // CirclePicker,
                // CompactPicker
                // GithubPicker,
                // HuePicker,
                // MaterialPicker,
                // PhotoshopPicker,
                // SketchPicker
                // SliderPicker,
                // SwatchesPicker
                // TwitterPicker
              ]}
            />

            <Drawer
              open={this.state.openDrawers}
              side='right'
              p={3}
              color='black'
              bg='white'
            >
              <Heading>{color.names.pantone.shift().name}</Heading>
              <General color={color} />
            </Drawer>

          </React.Fragment>
        )
      }}

    </Consumer.Primitives>
  )
}
/**
 *
 * @param {http://gka.github.io/chroma.js/} color
 */
const General = ({ color }) => {
  return (
    <Box width={256}>
      <Card>
        <BackgroundImage style={{ backgroundColor: color.chroma.hex() }} />
        <Box p={2}>
          <Subhead>{color.chroma.hex()}</Subhead>
          <Button>Darken</Button>
        </Box>
        <Divider w={1} borderColor='blue' />
        <Box p={2} />
        {/* <Box p={2}>
          <Subhead>{'Swatches'}</Subhead>
          {color.chroma.rgb().map((value, i) => {
            return (
              <React.Fragment>
                <Subhead>RGB</Subhead>

                <Text>
                  <Progress value={value} color={['red', 'green', 'blue'][i]} />
                  <Small key={i}>{'RGB'[i]}{value}</Small>
                </Text>
              </React.Fragment>
            )
          })}
        </Box> */}
      </Card>
    </Box>
  )
}

/**
 *
 * @param {http://gka.github.io/chroma.js/} color
 */
const OldGeneral = ({ color }) => {
  return (
    <Box width={256}>
      <Card>
        <BackgroundImage style={{ backgroundColor: color.chroma.hex() }} />
        <Box p={2}>
          {color.chroma.cmyk().map((value, i) => {
            const primaries = ['cyan', 'magenta', 'yellow']
            return (
              <React.Fragment>
                <Subhead>{primaries[i]}</Subhead>
                <Text>
                  <Progress value={value} color={primaries[i]} />
                  <Small key={i}>{'CMY'[i]}{value}</Small>
                </Text>
              </React.Fragment>
            )
          })}
        </Box>
        <Divider w={1} borderColor='blue' />
        <Box p={2}>
          <Subhead>{color.chroma.hex()}</Subhead>
          {color.chroma.rgb().map((value, i) => {
            const primaries = ['red', 'green', 'blue']

            return (
              <React.Fragment>
                <Subhead>{primaries[i]}</Subhead>

                <Text>
                  <Progress value={value / 255} color={primaries[i]} />
                  <Small key={i}>{'RGB'[i]}{value}</Small>
                </Text>
              </React.Fragment>
            )
          })}
        </Box>
        {/* <Box p={2}>
          <Subhead>{'Swatches'}</Subhead>
          {color.chroma.rgb().map((value, i) => {
            return (
              <React.Fragment>
                <Subhead>RGB</Subhead>

                <Text>
                  <Progress value={value} color={['red', 'green', 'blue'][i]} />
                  <Small key={i}>{'RGB'[i]}{value}</Small>
                </Text>
              </React.Fragment>
            )
          })}
        </Box> */}
      </Card>
    </Box>
  )
}
