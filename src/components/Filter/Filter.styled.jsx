import styled from '@emotion/styled';

export const Label = styled.label`
  color: #fff;
  font-size: 20px;
`;

export const Input = styled.input`
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