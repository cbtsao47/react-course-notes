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

* ways to pass props
  1. string
  2. inside `{}`
  3. with booleans, we can just pass the props without value, it defaults to `true`

## Looping in JSX

- It's common to use `array.map(fn)` to output loops in JSX

```
{data.map(element=> <h1>{element}<h1>)}
```

## Default Props

- One way `<ComponentName>.defaultProps` outside the component
- Another way

```
class Friend extends React.Component{
static defaultProps ={
    name:'Anonymous'.
    hobbies:['hobby1','hobby2','hobby3']
}
    render(){
    const {name,hobbies} = this.props;

return(
        <>
        <h1>{name}</h1>
        <ul>
            {hobbies.map(hobby=>
            <li>{hobby}</li>
            )}
        </ul>
        </>
    )
}
```

## Styling React

- Inline CSS styles now takes an object in React

```
<p style={{fontSize:'1.6rem'}}>styled paragraph</p>
```
