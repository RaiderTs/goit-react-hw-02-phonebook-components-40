import PropTypes from 'prop-types';
import {Label, Input} from './Filter.styled';

function Filter({ filter, onChange }) {
  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          placeholder="Enter a name to search"
          value={filter}
          onChange={event => {
            onChange(event);
          }}
        />
      </Label>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
