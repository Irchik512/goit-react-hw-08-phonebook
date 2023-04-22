import { Input, Label } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { apdateFilter } from 'redux/filter';
import { selectFilterValue } from 'redux/filter';

export default function Filter() {
  const filterValue = useSelector(selectFilterValue);
  const dispatch = useDispatch();
  const handleChange = evt => {
    const value = evt.target.value;
    dispatch(apdateFilter(value));
  };
  return (
    <Label>
      Find contact by name
      <Input
        type="text"
        name="filter"
        value={filterValue}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        required
      />
    </Label>
  );
}
