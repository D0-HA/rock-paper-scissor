function Box(props) {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img} />
      <p>WIN!</p>
    </div>
  );
}

export default Box;
