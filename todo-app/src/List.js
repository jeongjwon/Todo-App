import Item from './Item';
import { styled } from 'styled-components';
export const ListContainer = styled.ul`
  padding: 0;
  list-style: none;
`;

const List = ({ todos, handleCheckbox }) => {
  return (
    <ListContainer>
      {todos.map((todo) => (
        <Item todo={todo} key={todo.id} handleCheckbox={handleCheckbox} />
      ))}
    </ListContainer>
  );
};
export default List;
