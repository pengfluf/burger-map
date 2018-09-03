import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 5;

  margin-bottom: 10px;
  padding: 10px;

  color: white;
  border: 1px solid gray;
  border-radius: 3px;
  background-image: linear-gradient(-45deg, #e5497d, #555beb);
  background-color: #555beb;

  &::before,
  &::after {
    position: absolute;
    z-index: -1;

    display: block;

    width: 0;
    height: 0;

    content: '';
  }

  &::before {
    bottom: 2px;
    left: -2px;

    border-top: 12px solid #555beb;
    border-right: 12px solid transparent;
    border-left: 12px solid transparent;
  }

  &::after {
    bottom: 3px;
    left: 0;

    border-top: 10px solid white;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
  }
`;

export default Wrapper;
