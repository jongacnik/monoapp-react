var React = require('react')
var monoapp = require('monoapp')
var withReact = require('..')
var { Component } = require('..')

var app = monoapp()

app.use(withReact)
app.use(countStore)
app.route('/', view)
app.mount('#app')

class MyComponent extends Component {
  constructor(props) {
    super(props)
    this.handleclick = this.handleclick.bind(this)
  }

  handleclick() {
    this.emit('increment')
  }

  render () {
    console.log(this.global)
    console.log(this.emit)
    
    return <button onClick={this.handleclick}>{this.global.count}</button>
  }
}

function view (state, emit) {
  return (
    <main>
      <MyComponent />
    </main>
  ) 
}

function countStore (state, emitter) {
  state.count = 1
  emitter.on('increment', function () {
    state.count++
    emitter.emit('render')
  })
}