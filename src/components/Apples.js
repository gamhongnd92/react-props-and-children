function Apples(props) {
  return (
    <div>
      <div>
        <h2>These apple are: {props.color}</h2>
      </div>
      <div>
        <h3>There are {props.number}</h3>
      </div>
    </div>
  );
}

export default Apples;
