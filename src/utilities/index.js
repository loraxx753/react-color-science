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

export const getPrimes = max => {
  var sieve = [], i, j, primes = []
  for (i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      primes.push(i)
      for (j = i << 1; j <= max; j += i) {
        sieve[j] = true
      }
    }
  }
  return primes
}

export { metallicMeans, goldenRatio, ratioCalc }
