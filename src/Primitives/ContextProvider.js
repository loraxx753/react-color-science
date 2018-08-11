import React from 'react'

const Context = React.createContext({})

class Provider extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      color: '#fff',
      updateColor: this.updateColor.bind(this)
    }
  }

  updateColor = pickerColorObject => {
    this.setState({ color: pickerColorObject.hex })
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
