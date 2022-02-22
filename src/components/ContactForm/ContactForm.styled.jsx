import styled from '@emotion/styled';

export const Form = styled.form`
  max-width: 500px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  margin: auto;
  margin-top: 35px;
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  outline: none;
  border: none;
  background: linear-gradient(to right, #ed213a, #93291e);
  color: #fff;
  font-size: 20px;
  transition: transform 250ms;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.07);
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: baseline;
  margin: 15px;
  margin-right: 90px;
  width: 100%;
  font-size: 21px;
  color: #fff;
`;

export const Input = styled.input`
  margin-top: 15px;
  margin-left: 20px;
  width: 300px;
  height: 40px;
  border-radius: 8px;
  outline: none;
  border: none;
  padding-left: 50px;
  &:focus::placeholder {
    color: transparent;
  }
`;

export const CustomInputName = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 15px;
    bottom: 0;
    right: 0;
    left: 30px;
    margin: auto 0;
    width: 30px;
    height: 30px;
    background: url('https://gogeticons.com/frontend/web/icons/data/1/8/1/0/3/1/copy_iso_color_icon_512.png')
      no-repeat;
    background-size: cover;
  }
`;

export const CustomInputPhone = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 15px;
    bottom: 0;
    right: 0;
    left: 30px;
    margin: auto 0;
    width: 30px;
    height: 30px;
    background: url('https://gogeticons.com/frontend/web/icons/data/1/8/1/0/2/0/phone_missing_iso_color_icon_512.png')
      no-repeat;
    background-size: cover;
  }
`;
