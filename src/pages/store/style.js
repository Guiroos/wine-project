import styled from 'styled-components';

export const StoreDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
`;

export const ProductDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const FoundItemsDiv = styled.div`
  width: 100%;
  margin-bottom: 20px;
  span:first-child {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 10px;
    margin-right: 10px;
  }
`;


export const ProductGridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  grid-gap: 32px;
`;