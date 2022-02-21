import PropTypes from 'prop-types';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <div>
      <ul>
        {contacts.length > 0 ? (
          contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
              <button
                onClick={() => {
                  onDeleteContact(id);
                }}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>Phone book is empty</p>
        )}

        {}
      </ul>
    </div>
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
