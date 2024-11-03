import Puppy from "./Puppy";
function Dog() {
  return <Puppy name="Max" bowlShape="square" bowlStatus="full" />;
}

export default Dog;

// Bowl is Grandchild component
// Puppy is Child component
// Dog is parent component
