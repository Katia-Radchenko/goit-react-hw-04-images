import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <Gallery>
      {images.map(img => (
        <ImageGalleryItem key={img.id} item={img} openModal={openModal} />
      ))}

    </Gallery>
  );
};

