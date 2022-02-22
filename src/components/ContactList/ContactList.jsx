import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { ItemContact, List, Text } from './ContactList.styled';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <>
      <List>
        {contacts.length > 0 ? (
          contacts.map(({ id, name, number }) => (
            <ItemContact key={id}>
              <LocalPhoneIcon />
              {name}: {number}
              <IconButton
                aria-label="delete"
                color="error"
                size="large"
                onClick={() => {
                  onDeleteContact(id);
                }}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </ItemContact>
          ))
        ) : (
          <Text>Phone book is empty</Text>
        )}

        {}
      </List>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
