import styled from 'styled-components';

const Info = styled.div`
  position: relative;
  min-height: 200px;
  background-image: url(${props => props.backgroundURL});
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  &::after {
    display: block;
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: black;
    opacity: 0;
    transition: all 0.3s;
  }

  &:hover::after {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    min-height: 250px;
  }

  @media (min-width: 992px) {
    min-height: 300px;
  }
`;

export default Info;
