import Bowl from "./Bowl";
function Puppy(props) {
  return (
    <div>
      {props.name} has <Bowl bowlShape="square" bowlStatus="full" />
    </div>
  );
}

export default Puppy;

// Bowl is Grandchild component
// Puppy is Child component
// Dog is parent component
