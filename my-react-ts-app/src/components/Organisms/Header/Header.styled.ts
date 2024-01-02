import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  gap: 20px;
  color: #fff;
  width: 100%;
  height: 15%;
  display: flex;
  z-index: 1000;
  padding: 0 29px;
  font-size: 32px;
  font-weight: 600;

  align-items: center;
  background-color: #444444;

  .title {
    display: flex;
    align-items: center;
  }

  img {
    width: 42px;
    height: 48px;
    cursor: pointer;
  }
`;
