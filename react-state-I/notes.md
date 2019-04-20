## React State - I

---

- What is State?

* In any sufficiently advanced web app, the UI has to be stateful.
* logged-in users see a different screen than logged-out users
* clicking 'edit profile' oppens up a modal (pop-up) window
* sections of a website can expand or collapse, for instance clicking 'read more' (accordion)
* The state of the client interface (FE) is not always tied to state on the server

- State Changes

* State is designed to constantly changer in response to events.
* Agreate way to think about state is to think of games, for instance chess. At any point in time, the board is in a complex state.
* Every new move represents a single discrete state change, such as a Chess game or Go game

- What Does State Track ?

* There are two types of thins state on the FE keeps track of:
  - UI logic
    - the changing state of the interface e.g., there is a modal open right now because I'm editing my profile
      (think layout)
  - Business logic
    - the changing state of data e.g., in my inbox, messages are either read or unread, and this in turn affects how they display
      (think the actual data being displayed)
* Vanilla/jQuery State
  - The way we kept track of state with jQuery was by selecting DOM elements and seeing if they were displayed/hidden, or if they had certain styles or attributes. In other words, we were inferring the state of the app from the DOM itself. (directly interacting with the DOM)

- React State

* Core React Concept
  - component
    - building block of React
    - combines logic (JS) and presentation (JSX)
  - props
    - data passed to a component
    - immutable, component cannot change its own props directly
  - state
    - internal data specific to a component
    - data that changes over time
    - an instance attribute on a component
    - It's always an object (POJO), since you'll want to keep track of several keys/values.
  - initial state
    - state should be initialized as soon as the component is created. We set it in the constructor

## Updating React State

- State most commonly changes in direct response to some event.
- To do it, we use `this.setState()`
- In React, every JSX element has built-in attributes representing every kind of browser event.
- They are camel-cased, like `onClick`, and take callback functions as event listeners

* React Events

- `this` is very important
- where's the context for `this`?
- use `.bind(this)` to bind the context in the constructor of the function

## State VS Props

- State and props are the most important concepts in React
- Both are POJO{}, state is mutable where props are immutable
- State stores changing component data
- Props stores component configuration

## State as Props

- A common pattern we will see over and over again is a stateful (smart) parent component passing down its state values as props to stateless ( dumb ) child components

## Update state based off of existing state

- setState() is asynchronous...
- so it's risky to assume previous call has finished when you call it. Also, React will sometimes batch(squash together) calls to setState together into one for performance reasons
- it takes the last setState call

* functional setState

- setState callback form
- `this.setState((prevState)=>{ prevState.score+1})`
- the fact that you can pass a function to `this.setstate` lends itself nicely to a more advanced pattern called functional setState.
- Basically you can describe your state updates abstractly as separate functions. Buy why?
- it makes it easy to test state changes since you just need to test the plain function

## Mutable Data Structures

- objects/arrays/arrays of objects
- use pure functions to make a copy
- There is a slight efficiency cost due to the O(n) space/time required to make a copy, but it's almost always worth it to ensure that your app doesn't have extremely difficult to detect bugs due to mischevious side effects.
- immutable state just means that there is an old state object and a new state object that are both snapshots in time.
- the safest way to update state is to make a copy of it, and then call `this.setState` with the new copy.
- This pattern is a good habit to follow

## Designing State

- Designing the state of a React application (or any modern web app) is a challenging skill

* Minimize your state

- Litmus test
  - does x change? if not, x should not be a part of state. it should be a prop
  - is x already captured by some other value y in state props ? derive it

* Bad Example

```
this.state={
  firstName:'Matt',
  lastName:'Lane',
  birthday:'1955-01-08T07:37:59.711Z',
  age:64,
  mood:'irate'
}
```

- Fixed Example

```
console.log(this.props)
{
  firstName:'Matt',
  lastName:'Lane',
  birthday:'1955-01-08T07:37:59.711Z',
  age:64
}
this.state={
  mood:'insane'
}
```

- State should live on the parent

* support the downward data flow philosophy of React
* this makes debugging easier, because the state is centralized. It's easier to predict where to find state

- Todo Example

```
class TodoList extends Component{
  constructor(props){
    super(props);
    this.state={
      todos:[
        {task:'do dishes',done:false,id:1}
        {task:'do laundry',done:false,id:2}
      ]
    }
  }
  render(){
    return(
      <ul>
      {this.state.todos.map(t=><Todo {...t}/>)}
      </ul>
    )
  }
```
