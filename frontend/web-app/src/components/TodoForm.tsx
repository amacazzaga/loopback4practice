const TodoForm = () => {
  return (
    <div className="container">
      <h4>formulario de tareas</h4>
      <form className="border m-1">
        <div className="m-1">activity</div>
        <input className="m-1" />
        <div className="m-1">description</div>
        <input className="m-1" />
      </form>
      <button type="submit">send</button>
    </div>
  );
};

export default TodoForm;
