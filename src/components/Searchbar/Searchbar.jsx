import { useState } from 'react';
import toast from 'react-hot-toast';
import { MdOutlineImageSearch } from 'react-icons/md';
import IconButton from '../IconButton/IconButton';
import { Form, Header, Input } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');


  const searchQueryHandler = ({ currentTarget: { value } }) => {
    setSearchQuery(value.toLowerCase());

  };

  const submitFormHandler = e => {
    e.preventDefault();

    const query = searchQuery.trim();

    if (query !== '') {
      onSubmit(query);
    } else {
      toast.error('Enter a valid search query!', {
        duration: 2000,
      });
    }
    reset();

  };

  const reset = () => {
    setSearchQuery('');
  };


  return (
    <Header>
      <Form onSubmit={submitFormHandler}>
        <Input
          onChange={searchQueryHandler}
          value={searchQuery}
          placeholder="Search images and photos"
          type="text"
          autocomplete="off"
        ></Input>
        <IconButton>
          <MdOutlineImageSearch />
        </IconButton>
      </Form>
    </Header>
  );
};


export default Searchbar;
