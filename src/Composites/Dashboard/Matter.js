import React from 'react'
import { default as BaseMatter } from 'matter-js'

export default class Matter extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount = () => {
    // module aliases
    var Engine = BaseMatter.Engine,
      Render = BaseMatter.Render,
      World = BaseMatter.World,
      Bodies = BaseMatter.Bodies

    // create an engine
    var engine = Engine.create()

    // create a renderer
    var render = Render.create({
      element: document.querySelector('#matterJsWindow'),
      engine: engine
    })

    // create two boxes and a ground
    var boxA = Bodies.rectangle(400, 200, 80, 80)
    var boxB = Bodies.rectangle(450, 50, 80, 80)
    var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true })
    // add all of the bodies to the world
    World.add(engine.world, [boxA, boxB, ground])

    // run the engine
    Engine.run(engine)

    // run the renderer
    Render.run(render)
  }

  render () {
    return (
      <React.Fragment>
        <div id='matterJsWindow' />
      </React.Fragment>
    )
  }
}
