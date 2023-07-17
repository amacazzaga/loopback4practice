import TodoType from "../types/todotype";
interface Props {
  todo: TodoType;
}

const TodoItem = ({ todo }: Props) => {
  return (
    <div>
      <div>{todo.id}</div>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
    </div>
  );
};

export default TodoItem;
