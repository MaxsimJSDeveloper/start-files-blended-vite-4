import {
  Section,
  Container,
  Header,
  Text,
  Form,
  TodoList,
  EditForm,
} from 'components';
import { useSelector } from 'react-redux';
import { selectTodos, selectCurrentTodo } from 'reduxTodo/selectors';

export const App = () => {
  const todos = useSelector(selectTodos);
  const currentTodo = useSelector(selectCurrentTodo);
  return (
    <>
      <Header />
      <Section>
        <Container>
          {!currentTodo ? <Form /> : <EditForm />}
          {!todos.length ? (
            <Text textAlign="center">Create your first todo😉</Text>
          ) : (
            <TodoList />
          )}
        </Container>
      </Section>
    </>
  );
};
