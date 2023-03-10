import { ComponentProps } from '../../types/core';

import { Container, InfoContainer, InfoImg } from './styles';

const Info: React.FC<ComponentProps> = ({ images }) => {
  return (
    <Container>
      {images?.map((image, index) => (
        <InfoContainer key={`${image.src}-${index}`}>
          <InfoImg src={image.src} alt={image.description} />
          <span style={image.styles}>{image.description}</span>
        </InfoContainer>
      ))}
    </Container>
  );
};

export default Info;
