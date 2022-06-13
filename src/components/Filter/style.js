import styled from 'styled-components';

export const FilterList = styled.ul`
  width: 242px;
  height: 100%;
  list-style: none;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  margin-left: 40px;
  p{
    height: 19px;
    font-weight: 700;
    font-size: 18;
    line-height: 22px;
  }
  label {
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 100%;
    height: 100%;
  }
  li {
    display: flex;
    align-items: center;
    height: 42px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
  li:hover {
    background-color: #F5F5F5;
  }
`;
