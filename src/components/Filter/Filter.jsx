import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Label = styled.label`
  color: #fff;
  font-size: 20px;
`;

const Input = styled.input`
  margin-left: 10px;
  margin-bottom: 15px;
  width: 220px;
  height: 40px;
  border-radius: 8px;
  outline: none;
  border: none;
  padding-left: 10px;
  &:focus::placeholder {
    color: transparent;
  }
`;
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
