import React from 'react'
import Color from 'color'
import namer from 'color-namer'
import { Text, Badge, Heading, Debug, Grid } from 'Components/Primitives'
import { capitalize, ObjectMap } from 'utilities'

export default props => {
  return (
    <React.Fragment>
      <ObjectMap input={props.types}>
        {(colors, key, i) => (
          <React.Fragment>
            <Heading>{capitalize(key)}</Heading>
            <Grid>

              <ObjectMap input={colors}>
                {(color, name, i) => (
                  <Grid.Unit size={1 / 4} key={i} style={{ margin: '2px' }}>
                    <Swatch name={name} fromColor={color} />
                  </Grid.Unit>
                )}
              </ObjectMap>
            </Grid>
          </React.Fragment>
        )}
      </ObjectMap>
    </React.Fragment>
  )
}

export class Swatch extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.name,
      color: Color(this.props.fromColor),
      pantone: this.getColorNames(this.props.fromColor)
    }
  }

  getColorNames (colorHex) {
    const names = namer(colorHex, { pick: ['pantone'] })
    const colorInfo = names.pantone.shift()

    return colorInfo
  }

  componentWillReceiveProps () {
    this.setState({
      name: this.props.name,
      color: Color(this.props.fromColor),
      pantone: this.getColorNames(Color(this.props.fromColor).hex())
    })
  }

  roundIfNumber (val) {}

  debugIfObject (val) {
    console.log(typeof val)
    return val
  }

  sanitizeInputs (val) {
    if (typeof val === 'number') return Math.round(val)
    else if (typeof val === 'object') return <Debug>{val}</Debug>
    else return val
  }

  render () {
    return (
      <React.Fragment>
        <Badge
          bg={this.state.name}
          style={{
            width: '100%',
            border: `1px solid rgba(${this.state.color.isDark() ? '255,255,255' : '0,0,0'},0.1)`
          }}
        >
          <Text color={this.state.color.isDark() ? 'white' : 'black'}>
            {this.state.name}
          </Text>

        </Badge>

      </React.Fragment>
    )
  }
}
