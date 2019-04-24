## React Component Lifecycle

---

- Every component comes with methods that allow developers to update application state and reflect the changes to the UI before/after key react "events".

* There are three main phases
  - Mounting
  - Updating
  - Unmounting

## Order

- Mounting

1. constructor()
   - often used to initalize state and bind methods
2. render()
   - react updates the DOM to reflect what should be rendered
3. componentDidMount()
   - the method runs after the component is mounted
   - "mounting" is the first time the component is rendered to DOM.
   - a good place to load any data via AJAX or set up subscriptions/timers
4. calling `this.setState()` will cause re-render
