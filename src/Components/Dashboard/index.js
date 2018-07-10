import React from 'react'
import Color from 'Components/Toolbelt/Color'
// import { Swatches, Meta } from 'Components/Toolbelt/Color'
import { Consumer as Configuration } from 'Components/Configuration'
import { Drawer } from 'Components/Primitives'

// wavelength = 620 - 170 / 270 * hueDegrees
export default props => (
  <Configuration>
    {config => {
      let {
        dark,
        light,
        red,
        orange,
        yellow,
        green,
        blue,
        indigo,
        violet
      } = config.theme.colors

      const colorHierarchy = {
        achromatic: {
          dark,
          light
        },
        primaries: {
          red,
          green,
          blue
        },

        roygbiv: {
          red,
          orange,
          yellow,
          green,
          blue,
          indigo,
          violet
        }
        // primaries: {
        //   red,
        //   green,
        //   blue
        // },
        // secondary: {
        //   orange,
        //   yellow
        // }
      }
      return (
        <React.Fragment>
          <Color.Meta color={{ blue }} />

          <Drawer
            open
            side='right'
            p={3}
            color='black'
            bg='white'
            style={{ borderLeft: '1px solid rgba(100,100,100,0.1)' }}
          >
            <Color.Swatches types={{ ...colorHierarchy }} />

          </Drawer>
        </React.Fragment>
      )
    }}
  </Configuration>
)
