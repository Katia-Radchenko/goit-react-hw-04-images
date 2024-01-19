import { Item, Image } from './ImageGalleryItem.styled';


const ImageGalleryItem = ({ item, openModal }) => {
  const { largeImageURL, tags, webformatURL } = item;
  return (
    <Item
      onClick={e => {
        e.preventDefault();
        openModal(largeImageURL, tags);
      }}
    >
      <Image src={webformatURL} alt={tags} loading="lazy" />
    </Item>
  );
};


export default ImageGalleryItem;
