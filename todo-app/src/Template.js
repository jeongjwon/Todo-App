import Insert from './Insert';
import List from './List';
import useLocalStorage from './useLocalStorage';
import { styled } from 'styled-components';
export const TemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1 {
    margin: 1rem 0;
  }
`;
const Template = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const hanldeInsert = (todo) => {
    setTodos((prevState) => [...prevState, todo]);
  };

  const handleCheckbox = (id) => {
    setTodos((todo) =>
      todo.map((e) =>
        e.id === id
          ? {
              ...e,
              checked: !e.checked,
            }
          : e
      )
    );
  };
  return (
    <TemplateContainer>
      <h1>Your Todo</h1>
      <Insert hanldeInsert={hanldeInsert} />
      {todos && <List todos={todos} handleCheckbox={handleCheckbox} />}
    </TemplateContainer>
  );
};

export default Template;
