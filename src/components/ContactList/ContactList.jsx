import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import styled from '@emotion/styled';

const ItemContact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  color: #fff;
  width: 500px;
  height: 50px;
  background: linear-gradient(to right, #3e5151, #decba4);
  border-radius: 5px;
  margin-bottom: 15px;
  padding-left: 15px;
  transition: transform 250ms;
  &:hover,
  &:focus {
    transform: translateX(15px);
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Text = styled.p`
  color: #fff;
  font-size: 20px;
`;

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
