import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 40px;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default Wrapper;
