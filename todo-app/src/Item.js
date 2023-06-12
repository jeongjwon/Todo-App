import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import cn from 'classnames';
import { styled } from 'styled-components';

export const ItemWrppaer = styled.div`
  background: #63a1d1;
  margin: 0.5rem 0;
  width: 12rem;
  /* padding: 0.3rem; */
  border-radius: 0.5rem;
`;
export const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.5rem;
  > .text {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    > .checkbox svg {
      display: flex;
    }
  }
  > .date {
    /* margin-left: 1rem; */
  }
`;
const Item = ({ todo, handleCheckbox }) => {
  console.log(todo);
  const { name, checked, id } = todo;
  return (
    <ItemWrppaer>
      <ItemContainer>
        <div className="text">
          <div
            className={cn('checkbox', checked)}
            onClick={() => handleCheckbox(id)}
            role="presentation"
          >
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          </div>

          <div>{name}</div>
        </div>

        {/* <div className="date">{date}</div> */}
      </ItemContainer>
    </ItemWrppaer>
  );
};

export default Item;
