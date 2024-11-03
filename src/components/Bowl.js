function Bowl(props) {
  return (
    <span>
      {props.bowlShape}-shaped bowl, and it's currently {props.bowlStatus}
    </span>
  );
}

export default Bowl;

// Bowl is Grandchild component
// Puppy is Child component
// Dog is parent component
