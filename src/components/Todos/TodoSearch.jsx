import Input from "../UI/Input";
import Button from "../UI/Button";
function TodoSearch({value , onChange}) {
  return (
    <>
      <Input
        placeholder="Search todos"
        value={value}
        onChange={onChange}  
      />
    </>
  );
}
export default TodoSearch;
