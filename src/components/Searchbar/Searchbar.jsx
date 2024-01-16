import {Component} from 'react';
import toast from "react-hot-toast";

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { MdOutlineImageSearch } from "react-icons/md";
 import IconButton from '../IconButton/IconButton';
import { Form, Header, Input } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  searchQueryHandler = e => {
    this.setState({ searchQuery: e.target.value });
  };

  submitFormHandler = e => {
    e.preventDefault();

    const query = this.state.searchQuery.trim();

    if (query !== '') {
      this.props.onSubmit(query);
    } else {
      toast.error('Enter a valid search query!', {
        duration: 2000
      })
    }

    this.reset();
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    return(
      <Header>
        <Form onSubmit={this.submitFormHandler}>
          <Input
            onChange={this.searchQueryHandler}
            value={this.state.searchQuery}
            placeholder="Search images and photos"
            type="text"
            autocomplete="off"
          ></Input>
          <IconButton>
            <MdOutlineImageSearch />
          </IconButton>
        </Form>
      </Header>
    )
  }
}

export default Searchbar
