const getMood = () => {
  const moods = ["angry", "happy", "hungry", "silly", "sad", "paranoid"];
  return moods[Math.floor(Math.random() * moods.length)];
};

class JSXDemo extends React.Component {
  render() {
    return (
      <>
        <h1>this is JSX</h1>
        <h2>
          js expressions works too just like {"this"} or {2 + 5}
        </h2>
        <h1>My Current Mood is :{getMood()}</h1>
      </>
    );
  }
}

reactDOM.redner(<JSXDemo />, document.getElementById("root"));
