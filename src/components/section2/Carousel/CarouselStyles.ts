import styled from 'styled-components';

interface CarouselImageContainerProps {
  larger?: boolean;
}

export const CarouselImageContainer = styled.div<CarouselImageContainerProps>`
  flex: 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  ${({ larger }: CarouselImageContainerProps) =>
    larger &&
    `
    flex: 2; /* A imagem maior ocupa mais espaço */
  `}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

