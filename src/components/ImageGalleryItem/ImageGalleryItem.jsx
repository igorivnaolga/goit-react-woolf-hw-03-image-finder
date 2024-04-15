import { Component } from 'react';
import { ImageModal } from '../Modal/Modal';
import { ImgGalleryItem, ImgGallery } from './ImageGalleryItem.styled';
export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  handleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };
  render() {
    const { image, largeImage } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <ImgGalleryItem onClick={this.handleModal}>
          <ImgGallery src={image} alt="" />
        </ImgGalleryItem>
        {isModalOpen && (
          <ImageModal
            isOpen={isModalOpen}
            onClose={this.handleModal}
            largeImg={largeImage}
          />
        )}
      </>
    );
  }
}
