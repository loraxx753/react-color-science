import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider as RebassProvider } from 'Primitives'
import {
  Provider as ConfigurationProvider,
  Consumer as ConfigurationConsumer
} from 'Primitives/Configuration'
import { injectGlobal } from 'styled-components'

injectGlobal`
  * { box-sizing: border-box; }
  body { 
    margin: 0; 
  }
`

ReactDOM.render(
  <ConfigurationProvider>
    <ConfigurationConsumer>
      {config => (
        <RebassProvider theme={config.theme}>
          <App />
        </RebassProvider>
      )}
    </ConfigurationConsumer>
  </ConfigurationProvider>,
  document.getElementById('root')
)
registerServiceWorker()
