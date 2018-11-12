var React = require('react')
var ReactDOM = require('react-dom')
var Component = require('./component')

module.exports = withReact

function withReact (state, emitter, app) {
  app._mount = (tree, newTree) => ReactDOM.render(newTree, tree)
  app._render = (tree, newTree) => ReactDOM.render(newTree, tree)
  Component.prototype.global = state
  Component.prototype.emit = emitter.emit
}