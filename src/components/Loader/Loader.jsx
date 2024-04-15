import { Bars } from 'react-loader-spinner';

import { LoaderContainer } from './Loader.styled';
export const Loader = ({ isLoading }) => {
  return (
    <LoaderContainer>
      {isLoading && (
        <Bars
          height="80"
          width="80"
          color="#3f51b5"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
    </LoaderContainer>
  );
};
