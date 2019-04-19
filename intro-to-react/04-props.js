const Hello = ({ name, bang, isACat }) => <h1>Hi,{name}</h1>;

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello name={"Haru"} />
        <Hello name={"Bachi"} bang={4} isACat />
      </div>
    );
  }
}
