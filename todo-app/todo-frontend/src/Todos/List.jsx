/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo);
  };

  const onClickComplete = (todo) => () => {
    completeTodo(todo);
  };

  console.log(todos)

  return (
    <>
      {todos
        .map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            onClickDelete={onClickDelete(todo)}
            onClickComplete={onClickComplete(todo)}
          />
        ))
        .reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  );
};

export default TodoList;
