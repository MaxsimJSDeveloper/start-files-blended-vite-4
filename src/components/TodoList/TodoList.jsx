import { Grid, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxTodo/selectors';

export const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <>
      {/* <Text textAlign="center">We did not find any todo😯</Text> */}
      <Grid>
        {todos.map((todo, index) => (
          <Todo
            key={todo.id}
            counter={index + 1}
            id={todo.id}
            text={todo.text}
          />
        ))}
      </Grid>
    </>
  );
};
