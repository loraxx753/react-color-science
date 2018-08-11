// index.js
import React from 'react'

const Index = props => <h1>Hello {props.data}</h1>

Index.getInitialProps = async () => {
  const fetch = require('isomorphic-fetch')
  const res = await fetch('http://example.com/data')
  const data = await res.json()

  return { data }
}
