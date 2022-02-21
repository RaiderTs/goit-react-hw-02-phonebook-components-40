import PropTypes from 'prop-types';

function Filter({ filter, onChange }) {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          placeholder="Enter a name to search"
          value={filter}
          onChange={event => {
            onChange(event);
          }}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
