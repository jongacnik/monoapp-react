var React = require('react')
var monoapp = require('monoapp')
var withReact = require('..')
var Component = require('../component')

var app = monoapp()

app.use(withReact)
app.route('/', view)
app.mount('#app')

class MyComponent extends Component {
  render () {
    console.log(this.global)
    console.log(this.emit)
    
    return <div>Hello World</div>
  }
}

function view (state, emit) {
  return (
    <main>
      <MyComponent />
    </main>
  ) 
}