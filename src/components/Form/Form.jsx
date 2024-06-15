import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addTodo } from 'reduxTodo/todoSlice';

export const Form = () => {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    const text = event.target.search.value;
    const newTodo = { id: nanoid(), text };
    dispatch(addTodo(newTodo));
    event.target.reset();
  }
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
