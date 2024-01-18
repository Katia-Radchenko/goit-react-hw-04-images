import styled from '@emotion/styled';
export const Button = styled.button`
  position: absolute;
  top: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transform: translateY(-50%);

  svg {
    width: 16px;
    height: 16px;
    color: blue;
  }
`;
