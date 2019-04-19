class Friend extends React.Component {
  static defaultProps = {
    from: "Anonymous"
  };
  render() {
    const { name, hobbies } = this.props;

    return (
      <>
        <h1>{name}</h1>
        <ul>
          {hobbies.map(hobby => (
            <li>{hobby}</li>
          ))}
        </ul>
      </>
    );
  }
}
class App extends React.Component {
  render() {
    return <Friend name="Ben" hobbies={["drumming", "gaming", "performing"]} />;
  }
}
