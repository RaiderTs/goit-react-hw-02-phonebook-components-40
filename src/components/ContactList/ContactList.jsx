import PropTypes from 'prop-types';

function ContactList({ contacts }) {
  return (
    <div>
      <ul>
        {contacts.length > 0 ? (
          contacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
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

ContactList.propTypes = {};

export default ContactList;
