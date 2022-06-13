import styled from 'styled-components';

export const ProductCardDiv = styled.div`
  margin: auto;
  text-align: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
`;

export const ProductCardPriceDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 10px;
  div:first-child {
    text-decoration: line-through;
    color: #888888;
    margin-right: 15px;
  }
  div:last-child {
    background-color: #F79552;
    color: white;
    padding: 3px 6px 3px 6px;
    border-radius: 2px;
  }
`;

export const ProductCardMemberCardDiv = styled.div`
  font-weight: 700;
  font-size: 11px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  div {
    display: flex;
    align-items: baseline;
    margin-left: 10px;
    color: #B6116E;
  }
  span:nth-child(2){
    font-size: 20px;
  }
`;

export const ProductCardNonMemberCardDiv = styled.div`
  font-weight: 700;
  color: #888888;
  font-size: 12px;
`;





export const ProductCardButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ProductCardButton = styled.button`
  background: #7EBC43;
  box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
  border: 0;
  width: 100%;
  border-radius: 4px;
  color: white;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
`;
