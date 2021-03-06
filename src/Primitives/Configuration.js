import React from 'react'
import { theme } from '../config/'

const Context = React.createContext({})

class Provider extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      theme,
      changeColor: (color, colorName, oldColor) => {
        const stateCopy = Object.assign({}, this.state)
        stateCopy.theme.colors[colorName] = color.hex
        this.setState({
          ...stateCopy
        })
      }
    }
  }

  render () {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
const Consumer = Context.Consumer

export { Provider, Consumer }
