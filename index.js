var React = require('react')
var ReactDOM = require('react-dom')

Component.prototype = Object.create(React.Component.prototype)

function withReact (state, emitter, app) {
  app._mount = (tree, newTree) => ReactDOM.render(newTree, tree)
  app._render = (tree, newTree) => ReactDOM.render(newTree, tree)
  Component.prototype.global = state
  Component.prototype.emit = function () {
    emitter.emit.apply(emitter, arguments)
  }
}

function Component (props) {
  React.Component.call(this, props)
}

module.exports = withReact
module.exports.Component = Component
