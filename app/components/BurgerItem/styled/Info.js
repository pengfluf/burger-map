import styled from 'styled-components';

const Info = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  min-height: 200px;
  padding: 10px;

  transition: all 0.3s;

  background-image: url(${props => props.backgroundURL});
  background-repeat: no-repeat;
  background-size: cover;

  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.1);
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: block;

    content: '';
    transition: all 0.3s;

    opacity: 0.5;
    background-color: black;

    @media (min-width: 992px) {
      opacity: 0;
    }
  }

  &:hover::after {
    opacity: 0.5;
  }

  &:hover > [class^='Title'] {
    opacity: 1;
  }

  @media (min-width: 768px) {
    min-height: 250px;
  }

  @media (min-width: 992px) {
    min-height: 300px;
  }
`;

export default Info;
