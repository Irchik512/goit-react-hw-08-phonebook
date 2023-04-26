import { InputGroup, InputLeftElement,Input } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'
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
    <InputGroup w={'50%'} m={'0 auto'}>
      <InputLeftElement
        pointerEvents='none'
        children={<Search2Icon color='teal.700' />}
      />
      <Input  placeholder='Find the contact' 
        type="text"
        name="filter"
        value={filterValue}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        border={'1px solid teal'}
        _hover={{borderColor: '#2dc8b9'}}
      />
    </InputGroup>
  );
}
