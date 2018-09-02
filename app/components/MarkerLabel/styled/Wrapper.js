import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  color: black;
  border: 1px solid gray;
  padding: 10px;
  border-radius: 3px;
  margin-bottom: 10px;
  z-index: 5;

  &::before {
    position: absolute;
    z-index: -1;
    bottom: 2px;
    left: 0px;
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 12px solid black;
  }

  &::after {
    position: absolute;
    z-index: -1;
    bottom: 2px;
    left: 2px;
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid white;
  }
`;

export default Wrapper;
