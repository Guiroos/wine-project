import styled from 'styled-components';

export const Bar = styled.nav`
  position: absolute;
  width: 100%;
  padding: 0 152px 0 152px;
  height: 88.23px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  color: #555555;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  top: 1.14%;
  z-index: 1;
`;

export const FlexDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyleLink = styled.a`
  font-family: 'Neo Sans Std', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 48px;
  padding: 5px;
  height: 100%;
  &:hover {
    color: #D14B8F;
    border-bottom: 2px solid #D14B8F;
    cursor: pointer;
  }
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: between;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #B4116D;
  }
`;

export const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
`;
