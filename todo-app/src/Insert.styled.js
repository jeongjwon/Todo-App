import { styled } from 'styled-components';
export const InsertForm = styled.form`
  display: flex;
  gap: 0.5rem;
`;
export const FormWrapper = styled.div`
  display: flex;
  flex: 1 1 100%;
  > input {
    border-radius: 0.2rem;
    background: #ebf0f4;
    outline: none;
    border: none;
    padding: 0.8rem;
    width: 100%;
  }
`;
export const PlusBtn = styled.button`
  border: none;
  background: #3989c6;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.2rem;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
`;
