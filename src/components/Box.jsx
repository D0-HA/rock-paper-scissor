const Box = (props) => {
  let result;
  if (
    props.title === "Computer" &&
    props.result !== "Draw" &&
    props.result !== ""
  ) {
    result = props.result === "Win" ? "Lose" : "Win";
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result}`}>
      <h1 className="title">{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img} />
      <p className="result">{result}</p>
    </div>
  );
};

export default Box;
