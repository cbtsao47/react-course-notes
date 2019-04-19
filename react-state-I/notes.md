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
