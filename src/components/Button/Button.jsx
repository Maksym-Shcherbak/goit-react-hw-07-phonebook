import css from './Button.module.css';
import { useDispatch } from 'react-redux';
import { setModal } from 'redux/modalSlice';

export const Button = () => {
  const dispatch = useDispatch();
  const onOpenModal = () => dispatch(setModal(true));
  return (
    <button className={css.addButton} type="button" onClick={onOpenModal}>
      +
    </button>
  );
};
