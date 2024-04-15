import { ImgGalleryList } from './ImageGallery.styled';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ImgGalleryList>
      {images.map(item => (
        <ImageGalleryItem
          key={item.id}
          image={item.webformatURL}
          largeImage={item.largeImageURL}
        />
      ))}
    </ImgGalleryList>
  );
};
