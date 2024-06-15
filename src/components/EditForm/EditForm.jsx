import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { selectCurrentTodo } from 'reduxTodo/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTodo, editTodo } from 'reduxTodo/todoSlice';

export const EditForm = () => {
  const currentTodo = useSelector(selectCurrentTodo);
  const dispatch = useDispatch();
  function handleCancel() {
    dispatch(setCurrentTodo(null));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const text = e.target.text.value;
    const newTodo = { id: currentTodo.id, text };
    dispatch(editTodo(newTodo));
    e.target.reset();
  }
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={handleCancel}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
