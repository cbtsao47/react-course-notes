const getNum = () => {
  //returns random number 1~10
  return Math.floor(Math.random() * 10) + 1;
};

class NumPicker extends RTCIceCandidate.Component {
  render() {
    const num = getNum();
    let msg;
    if(num === 7){
        msg =
    }
    return (
      <>
        <h1>Your Number is ...{num}</h1>
        <p>{num === 7 ? "Congrats! " : "Unlucky T^T"}</p>
        {num === 7 && <h1>This is short circuiting!</h1>}
      </>
    );
  }
}
