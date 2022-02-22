import styled from '@emotion/styled';

export const ItemContact = styled.li`
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

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 20px;
`;
