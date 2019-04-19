class StyledMachine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const msg = s1 === s2 && s2 === s3;
    return (
      <>
        <h3 className="Machine">
          {s1} {s2} {s3}
        </h3>
        <p>{msg ? "You win!" : "unlucky!"}</p>
        <h3>{s2}</h3>
      </>
    );
  }
}
