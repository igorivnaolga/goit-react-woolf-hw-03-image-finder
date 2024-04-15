import { BtnStyled } from './Button.styled';
export const Button = ({ btnName, onClick }) => {
  return (
    <BtnStyled type="button" onClick={onClick}>
      {btnName}
    </BtnStyled>
  );
};
