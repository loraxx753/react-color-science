import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Provider as RebassProvider } from 'rebass'
import { Consumer as ConfigurationConsumer } from 'Primitives/Configuration'
import { Debug, Button } from 'Primitives'

const StyledP = styled.p`
    color: purple;
    font-weight: bold;
`

export class MyWindowPortal extends React.PureComponent {
  constructor (props) {
    super(props)
    // STEP 1: create a container <div>
    this.containerEl = document.createElement('div')
    this.externalWindow = null
  }

  render () {
    // STEP 2: append props.children to the container <div> that isn't mounted anywhere yet
    return ReactDOM.createPortal(this.props.children, this.containerEl)
  }

  componentDidMount () {
    // STEP 3: open a new browser window and store a reference to it
    this.externalWindow = window.open(
      '',
      '',
      'width=600,height=400,left=200,top=200'
    )

    // STEP 4: append the container <div> (that has props.children appended to it) to the body of the new window
    this.externalWindow.document.body.appendChild(this.containerEl)
  }

  componentWillUnmount () {
    // STEP 5: This will fire when this.state.showWindowPortal in the parent component becomes false
    // So we tidy up by closing the window
    this.externalWindow.close()
  }
}

export default class extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      counter: 0,
      showWindowPortal: false
    }

    this.toggleWindowPortal = this.toggleWindowPortal.bind(this)
  }

  componentDidMount () {
    window.setInterval(() => {
      this.setState(state => ({
        ...state,
        counter: state.counter + 1
      }))
    }, 1000)
  }

  toggleWindowPortal () {
    this.setState(state => ({
      ...state,
      showWindowPortal: !state.showWindowPortal
    }))
  }

  render () {
    return (
      <div>
        <StyledP>Something New</StyledP>

        <h1>Counter: {this.state.counter}</h1>

        <button onClick={this.toggleWindowPortal}>
          {this.state.showWindowPortal ? 'Close the' : 'Open a'} Portal
        </button>

        {this.state.showWindowPortal &&
          <ConfigurationConsumer>
            {config => (
              <RebassProvider theme={config.theme}>
                <MyWindowPortal>
                  <Button
                    onClick={() => this.setState({ showWindowPortal: false })}
                  >
                    sdfsdf
                  </Button>

                </MyWindowPortal>

              </RebassProvider>
            )}
          </ConfigurationConsumer>}
      </div>
    )
  }
}
