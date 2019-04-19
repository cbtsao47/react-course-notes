## Babel

- JSX fundamentally is just syntactic sugar.
  ![jsx-to-js](https://i.imgur.com/vn7Y23X.png)

## short circuiting

- Use `&&` and truthiness to clean up ternary/if statements
- {ifLeftIsTrue && rightSideWillReturn}

## App

- conventional for the top-level component to be named App.
- renders all other components

## Order of Script Tags

- children(all other scripts) has to come before parent (index.js)

## Props (aka properties)

- A useful component is a reusable one. This often means making it configurable or customizable. This can be done with props.
- props are for `configuring` the component
- props are NOT mutable
