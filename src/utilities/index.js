import React from 'react'
import metallicMeans, { goldenRatio, ratioCalc } from './ratios'

export const realWord = camelCasedKey =>
  camelCasedKey[0].toUpperCase() +
  camelCasedKey.substring(1).replace(/([A-Z])+/g, ' $1')

// New Word: capitalize: v.
export const capitalize = string =>
  string.charAt(0).toUpperCase() + string.slice(1)

export const dashToPascal = string => capitalize(dashToCamel(string))

export const dashToCamel = string =>
  string.replace(/-([a-z])/g, c => c[1].toUpperCase())

export const ObjectMap = props =>
  Object.keys(props.input).map((key, i) => (
    <React.Fragment key={i}>
      {props.children(props.input[key], key, i)}
    </React.Fragment>
  ))

export { metallicMeans, goldenRatio, ratioCalc }
