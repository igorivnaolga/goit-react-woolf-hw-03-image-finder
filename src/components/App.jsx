import { Component } from 'react';
import { fetchImages } from './service/API';
import { Searchbar } from './Searchbar/Searchbar';
import { Container } from './App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button.styled';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    totalPages: null,
    isError: false,
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoading: true, error: false });
        const response = await fetchImages(query, page);

        this.setState(prevState => {
          const { hits, totalHits } = response;
          return {
            images: [...prevState.images, ...hits],
            isLoading: false,
            totalPages: Math.ceil(totalHits / 12),
          };
        });
      } catch (error) {
        this.setState({ isError: true });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = newQuery => {
    this.setState({
      query: newQuery,
      page: 1,
      images: [],
    });
  };

  render() {
    const { isError, images } = this.state;
    const galleryImages = images.length !== 0;

    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {isError && (
          <p>Oops! Something went wrong! Please try reloading this page!</p>
        )}
        {galleryImages && <ImageGallery images={images} />}
      </Container>
    );
  }
}
