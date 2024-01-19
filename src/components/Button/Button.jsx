import React from 'react';

import { LoadMoreButton } from './Button.styled';

const Button = ({ loadMore }) => {
  return (
    <LoadMoreButton type="submit" onClick={loadMore}>Load more</LoadMoreButton>
  );
};

export default Button;
