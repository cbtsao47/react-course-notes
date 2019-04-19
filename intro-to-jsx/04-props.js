const Hello = ({ name }) => <h1>Hi,{name}</h1>;

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello name={"Haru"} />
        <Hello name={"Bachi"} />
      </div>
    );
  }
}
