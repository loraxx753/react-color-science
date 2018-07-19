import React from 'react'
import { Grid, Box, Subhead, Text, Small } from 'Primitives'
import Color from 'color'
import { capitalize } from 'utilities'

const checkHex = hexcode => (hexcode.startsWith('#') ? hexcode : `#${hexcode}`)

export default props => (
  <Grid>
    {Object.keys(props.names).map((key, i) => (
      <Grid.Unit key={i} size={1 / Object.keys(props.names).length}>
        <Box
          style={{
            background: checkHex(props.names[key][0].hex),
            color: Color(checkHex(props.names[key][0].hex)).isDark()
              ? 'rgba(255,255,255,0.6)'
              : 'rgba(51,51,51, 0.6)'
          }}
        >
          <Small>
            {capitalize(props.names[key][0].name)}
          </Small>
          <Text>
            {props.names[key][0].hex}
          </Text>
          <Text>
            {Math.round(props.names[key][0].distance)} off
          </Text>
        </Box>
        <Subhead>{capitalize(key)}</Subhead>

      </Grid.Unit>
    ))}
  </Grid>
)
