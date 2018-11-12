# monoapp-react

[monoapp](https://github.com/jongacnik/monoapp) plugin to use [React](https://github.com/facebook/react) as a view layer

## Example

```js
var monoapp = require('monoapp')
var withReact = require('monoapp-react')

var app = monoapp()

app.use(withReact)
app.route('/', view)
app.mount('#app')

function MyComponent () {
  return <div>Hello World</div>
}

function view (state, emit) {
  return (
    <main>
      <MyComponent />
    </main>
  ) 
}
```

## Component

An instance of `React.Component` extended with `monoapp` state and emit is included:

```js
var Component = require('monoapp-react/component')

class MyComponent extends Component {
  render () {
    console.log(this.global)
    console.log(this.emit)
    
    return <div>Hello World</div>
  }
}
```