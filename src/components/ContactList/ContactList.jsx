import PropTypes from 'prop-types';
import { Wrap, WrapItem,  IconButton, Flex, Text , Box, Card, Avatar, Heading,} from '@chakra-ui/react'
import { DeleteIcon, PhoneIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts';
import { useDispatch } from 'react-redux';
import { deleteContactById} from 'redux/contacts';
// import { useDisclosure } from '@chakra-ui/react'

export default function ContactList() {
  const contactsList = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  // const {onOpen, isOpen, onClose } = useDisclosure();
  // const handleSubmit = (id)=>{

  //  const updateContact = (e)=>{
  //     e.preventDefault();
  //     console.log(e);
  //   //  dispatch(updateContactById(id));
  //   }
  //   return updateContact;
  // } 
  return (
    <Wrap spacing='4px'justify={'center'} flexWrap={'nowrap'} flexDir={'column'} >
      {contactsList.map(({id, name, number,}) => (
        <WrapItem justify={'center'} key={id}>
        <Card w='xs'  p={'12px'} justify={'space-between'} flexWrap={'nowrap'} flexDir={'colum'}  >
              <Flex gap='4' alignItems='center' >
                <Avatar/>
                <Box alignItems={'center'} maxW={'180px'}  overflow={'clip'}>
                  <Heading size='sm'>{name}</Heading>
                  <Text>{number}</Text>
                </Box>
              </Flex>
              <Flex alignItems='center' flexDir={'column'}>
                <a href={`tel:${number}`}>
                  <IconButton
                    size={'xs'}
                    variant='ghost'
                    colorScheme='teal'
                    aria-label='Call the contact'
                    icon={<PhoneIcon />}
                    type="tel" 
                  />
                </a>
                {/* <IconButton
                  size={'xs'}
                  variant='ghost'
                  colorScheme='teal'
                  aria-label='Edit contact'
                  icon={<EditIcon />}
                  type="button" 
                  onClick={onOpen}
                /> */}
                <IconButton
                  size={'xs'}
                  variant='ghost'
                  colorScheme='teal'
                  aria-label='Delete contact'
                  icon={<DeleteIcon />}
                  type="button" 
                  onClick={() => dispatch(deleteContactById(id))}
                />
              </Flex>
        </Card>
        </WrapItem>
      ))}
    </Wrap>
  );
}
ContactList.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};