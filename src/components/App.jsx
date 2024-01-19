import React, { Component } from 'react';
import { imgApi } from '../services/api-services';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Infobox from './Infobox/Infobox';
import Button from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    textQuery: '',
    images: [],
    page: 1,
    loading: false,
    showModal: false,
    error: null,
    totalPage: null,
  };

  async componentDidUpdate(_, prevState) {
    let { page } = this.state;
    const prevSearchValue = prevState.textQuery;
    const nextSearchValue = this.state.textQuery;

    if (prevSearchValue !== nextSearchValue || prevState.page !== page) {
      this.setState({ loading: true });

      try {
        const response = await imgApi(nextSearchValue, page);
        const { hits, totalHits } = response.data;
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          totalPage: totalHits,
        }));
      } catch (error) {
        this.setState({ error: 'Something wrong. Please try again.' });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleSubmit = searchValue => {
    this.setState({
      textQuery: searchValue,
      page: 1,
      images: [],
      loading: false,
      showModal: false,
      error: null,
      totalPage: null,
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onOpenModal = (imgUrl, tag) => {
    this.setState({ showModal: true, imgUrl, tag });
  };

  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { images, showModal, imgUrl, tag, loading, totalPage, error, page } =
      this.state;
    const showLoadMore = totalPage / 12 > page;
    const info = totalPage === 0;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} openModal={this.onOpenModal} />

        {showModal && (
          <Modal onClose={this.onCloseModal}>
            <img src={imgUrl} alt={tag} />
          </Modal>
        )}

        {loading && <Loader />}

        {showLoadMore && <Button loadMore={this.onLoadMore} />}

        {info && <Infobox />}
        {error && <Infobox>{error}</Infobox>}
      </>
    );
  }
}
