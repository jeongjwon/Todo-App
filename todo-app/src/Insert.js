// eslint-disable react/prop-types
import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { InsertForm, FormWrapper, PlusBtn } from './Insert.styled';

const Insert = ({ hanldeInsert }) => {
  const [value, setValue] = useState('');
  const today = new Date();
  const hanldeInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    const newTodo = {
      name: value,
      checked: false,
      id: Date.now(),
      date: today.toLocaleDateString(),
    };
    hanldeInsert(newTodo);
    setValue('');
  };
  return (
    <InsertForm onSubmit={handleSumbit}>
      <FormWrapper>
        <input
          value={value}
          onChange={hanldeInputChange}
          placeholder="Enter TODO"
          required
        />
      </FormWrapper>
      <PlusBtn type="submit">
        <MdAdd />
      </PlusBtn>
    </InsertForm>
  );
};

export default Insert;
