class JSXDemo extends React.Component {
  render() {
    return <h1>this is JSX</h1>;
  }
}

reactDOM.redner(<JSXDemo />, document.getElementById("root"));
