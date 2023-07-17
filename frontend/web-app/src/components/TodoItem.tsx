import TodoType from "../types/todotype";
interface Props {
  todo: TodoType;
}

const TodoItem = ({ todo }: Props) => {
  return (
    <div className="border m-1">
      <div className="m-1">{todo.id}</div>
      <div className="m-1">{todo.title}</div>
      <div className="m-1">{todo.desc}</div>
      <div className="m-1">{todo.isComplete.toString()}</div>
    </div>
  );
};

export default TodoItem;
