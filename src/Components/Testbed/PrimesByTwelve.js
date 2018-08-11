import React from 'react'
import {
  Flex,
  Text,
  Input,
  Label,
  Slider,
  Subhead,
  Row,
  Column,
  Debug
} from 'Primitives'
import Latex from 'react-latex'
import { capitalize, ObjectMap, getPrimes } from 'utilities'
import { InlineMath } from 'react-katex'
import math from 'mathjs'

// Column plus multiple times row
// c + (m * r)

const InputGroup = props => (
  <React.Fragment>
    {props.keys.map((key, i) => (
      <React.Fragment key={i}>
        {' '}<Label>{capitalize(key)}</Label>
        <Input
          value={props.state[key] || ''}
          placeholder={key}
          onChange={props.onChange}
        />
      </React.Fragment>
    ))}
  </React.Fragment>
)

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      columns: props.columns || null,
      numberOfAnswers: 0,
      rows: 0,
      primes: [],
      columnPrimes: []
    }
    this.handleInputChange.bind(this)
  }

  updateRows = updatedState => {
    let { rows, columns, ...state } = updatedState
    updatedState['maxAnswers'] = columns * rows
    updatedState['primes'] = getPrimes(updatedState['maxAnswers'])
    this.setState({ ...updatedState })
  }

  handleInputChange = e => {
    let { placeholder, value } = e.currentTarget
    const updatedState = Object.assign({}, this.state)
    updatedState[placeholder] = value.match(/^[0-9]+$/)
      ? parseInt(value)
      : value
    this.updateRows(updatedState)
  }

  render () {
    return (
      <React.Fragment>
        <Text>
          <InputGroup
            state={this.state}
            onChange={this.handleInputChange}
            keys={['columns']}
          />
          <Label>Equation</Label>

          <p>Iterations: {this.state.rows}</p>
        </Text>
        <Slider
          step={10}
          max={100}
          defaultValue={0}
          placeholder={'rows'}
          onChange={this.handleInputChange}
        />
        <Subhead>Ansewers for 0 - {this.state.maxAnswers}</Subhead>
        <Row>
          {math
            .range(0, this.state.columns || 0)
            ._data.map((colIdx, i) => (
              <Debug>{this.state.columns[colIdx]}</Debug>
            ))}
        </Row>
        {math.range(0, this.state.rows || 0)._data.map((rowIdx, i) => (
          <Row key={i}>
            {math.range(0, this.state.columns || 0)._data.map((colIdx, i) => {
              const indexNudge = colIdx + 1
              const result = indexNudge + this.state.columns * rowIdx
              const isPrime = this.state.primes.includes(result)
              const stateCopy = Object.assign({}, this.state)
              stateCopy.columnPrimes[colIdx].push({
                id: colIdx,
                primes: 0,
                nonPrimes: 0
              })
              this.setState({
                ...stateCopy
              })
              return (
                <Column
                  style={{
                    margin: 0,
                    padding: 0,
                    width: '100px'
                  }}
                  key={i}
                  bg={isPrime ? 'yellow' : 'white'}
                  equation={`$${colIdx} + (${this.state.columns} \\times ${rowIdx}) = ${result}$`}
                >
                  <Flex justifyContent='center'>
                    {result}
                  </Flex>
                </Column>
              )
            })}
          </Row>
        ))}
      </React.Fragment>
    )
  }
}
