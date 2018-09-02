import styled from 'styled-components';

const Title = styled.h3`
  font-size: ${props => (props.address ? '18px' : '25px')};

  z-index: 1;

  text-align: center;

  opacity: 1;

  @media (min-width: 992px) {
    opacity: 0;
  }
`;

export default Title;
