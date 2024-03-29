import styled from '@emotion/styled';
export const Item = styled.li`
  list-style: none;
  position: relative;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    &:hover {
      transform: scale(1.02);
    }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 250ms ease;
`;
