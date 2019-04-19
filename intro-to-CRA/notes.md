## Install CRA

`npm install -g create-react-app`
or
`yarn global add create-react-app`

## Running CRA

`npm run create-react-app <appName>`
or
`create-react-app <appName>`

or
`npx create-react-app <appName>`

- the above command installs and runs at the same time

## Webpack

- CRA is built on top of 'Webpack', a JS utility that:
  - Enables module importing/exporting
    - Packages up all CSS/images/JS into a single file for the browser
    - Dramatically reduces # of HTTP requests for performance
  - Hot reloading: when you change a source file, automatically reloads
    - is very clever and tries to only reload relevant files
  - Enables easy testing & deployment

## ES2015 Modules

- named and default exports
- used to export/import classes/data/functions between JS files

* importing default exports

- `import example from'example'` automatically looks `into node_modules`
- `import example from './example'` looks into the path './example'
  \*importing named exports
- `import {name1,name2, name3 ...} from './example/namelist'`
- Conventionally, default exports are used when there's a most likely thing to export

## CRA conventions

- Each React component goes in separate file
  - `src/Car.js` for Car component
  - `src/House.js` for House component
  - extends `Component` instead of `React.Component`
  - export the component as default
  - Skeleton assumes top component is App in App.js

## Assets and CRA

- To include images and CSS, you can import them in JS files

```
import logo from './logo.svg';
import './App.css';
```

- CSS

* Make a CSS file for each React component
  - House.css for House component
* Import it at the top of House.js
  - CRA will automatically load that CSS
* Conventional to add `className='House' onto House div
  - And use that as prefix for sub-items to style

```
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    </div>
```

- images are stored inside `/src` as well mostly in `assets`
