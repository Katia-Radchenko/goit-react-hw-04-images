import React from 'react';
import { BiMessageRoundedError } from 'react-icons/bi';

import { Info } from './Infobox.styled';

const Infobox = () => {
  return (<Info>Oops...<BiMessageRoundedError /> there are no images matching your search...</Info>);
};

export default Infobox;
