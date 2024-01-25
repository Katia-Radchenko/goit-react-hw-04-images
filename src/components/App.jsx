import React, { useState, useEffect } from 'react';
import { imgApi } from '../services/api-services';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Infobox from './Infobox/Infobox';
import Button from './Button/Button';
import { Loader } from './Loader/Loader';

const App = () => {
  const [textQuery, setTextQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [totalPage, setTotalPage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {

        const response = await imgApi(textQuery, page);
        const { hits, totalHits } = response.data;
        setImages(
          prevImages => [...prevImages, ...hits],
          setTotalPage(totalHits),
        );
      } catch (error) {
        setError({ error: 'Something wrong. Please try again.' });
      } finally {
        setLoading(false);
      }
    };
    if (textQuery) {
      fetchPosts();
    }
  }, [page, textQuery]);

  const handleSubmit = searchValue => {
    if (textQuery === searchValue) {
      return;
    }
    setTextQuery(searchValue);
    setPage(1);
    setImages([]);
    setLoading(false);
    setShowModal(false);
    setError(null);
    setTotalPage(null);
  };
  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const onOpenModal = images => {
    setShowModal(true);
    setSelectedImage(images);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const showLoadMore = totalPage / 12 > page;
  const info = totalPage === 0;
  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} openModal={onOpenModal} />

      {showModal && (
        <Modal onClose={onCloseModal}>
          <img src={selectedImage} alt="img" />
        </Modal>
      )}

      {loading && <Loader />}

      {showLoadMore && <Button loadMore={onLoadMore} />}

      {info && <Infobox />}
      {error && <Infobox>{error}</Infobox>}
    </>
  );
};

export default App;
