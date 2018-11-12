var React = require('react')
var ReactDOM = require('react-dom')

class Component extends React.Component {}

function withReact (state, emitter, app) {
  app._mount = (tree, newTree) => ReactDOM.render(newTree, tree)
  app._render = (tree, newTree) => ReactDOM.render(newTree, tree)
  Component.prototype.global = state
  Component.prototype.emit = emitter.emit
}

module.exports = withReact
module.exports.Component = Component