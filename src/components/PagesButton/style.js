import styled from 'styled-components';

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  button {
    margin-top: 20px;
    padding: 10px;
    color: white;
    margin-right: 10px;
    border: 0;
    border: 1px solid #B6116E;
    background-color: white;
    color: #B6116E;
    border-radius: 3px;
    :active {
      background-color: #B6116E;
      color: white;
    }
  }
`;