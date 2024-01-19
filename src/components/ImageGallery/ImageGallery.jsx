import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <Gallery>
      {images.map((img, idx) => (
        <ImageGalleryItem key={idx} item={img} id={img.id}openModal={openModal} />
      ))}
    </Gallery>
  );
};
