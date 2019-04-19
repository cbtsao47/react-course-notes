const Machine = ({ s1, s2, s3 }) => {
  const msg = s1 === s2 && s2 === s3;
  return (
    <>
      <h3>
        {s1} {s2} {s3}
      </h3>
      <p>{msg ? "You win!" : "unlucky!"}</p>
      <h3>{s2}</h3>
    </>
  );
};

class App extends React.Component {
  render() {
    return (
      <>
        <Machine s1={"orange"} s2={"apple"} s3={"apple"} />
        <Machine s1={"orange"} s2={"grape"} s3={"apple"} />
        <Machine s1={"orange"} s2={"orange"} s3={"orange"} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
