import TodoType from "../types/todotype";
interface Props {
  todo: TodoType;
}

const TodoItem = ({ todo }: Props) => {
  return (
    <div className="border">
      <div className="m-1">{todo.title}</div>
      <div className="m-1">{todo.description}</div>
    </div>
  );
};

export default TodoItem;
