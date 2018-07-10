import React from 'react'
import { ColorPicker } from 'Components/Toolbelt/Color'
import { Consumer as Configuration } from 'Components/Configuration'
import { Row, Column, Fixed, Heading } from 'Components/Primitives'
import { capitalize } from 'utilities'

export default props => (
  <Configuration>
    {config => (
      <Fixed
        style={{ width: '100vw' }}
        m={0}
        p={3}
        zIndex={1}
        right={0}
        bottom={0}
        bg='green'
      >
        <Row>
          {Object.keys(config.theme.colors).map((colorName, i) => (
            <Column key={i}>
              <Heading>{capitalize(colorName)}</Heading>
              <ColorPicker
                color={config.theme.colors[colorName]}
                onChange={(color, event) =>
                  config.changeColor(
                    color,
                    colorName,
                    config.theme.colors[colorName]
                  )}
                onChangeComplete={(color, event) =>
                  config.changeColor(
                    color,
                    colorName,
                    config.theme.colors[colorName]
                  )}
              />
            </Column>
          ))}
        </Row>
      </Fixed>
    )}
  </Configuration>
)
