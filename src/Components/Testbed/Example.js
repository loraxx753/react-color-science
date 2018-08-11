import React from 'react'

export default props => (
  <React.Fragment>
    <p>Here are some properties:</p>
    <ul>
      {Object.keys(props).map((key, i) => {
        if (typeof props[key] === 'function') {
          return (
            <li key={i}> {key}: Check the console. {props[key]('hello!')}</li>
          )
        } else if (typeof props[key] === 'object') {
          return <li key={i}>{JSON.stringify(props[key].Idunno, null, 2)}</li>
        } else return <li key={i}> {key}: {typeof props[key]}</li>
      })}
    </ul>
  </React.Fragment>
)
