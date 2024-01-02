import styled from "styled-components";

export const HeaderWrapper = styled.div`
  top: 0;
  gap: 33px;
  color: #fff;
  width: 100%;
  height: 15%;
  display: flex;
  z-index: 1000;
  padding: 0 29px;
  font-size: 32px;
  position: sticky;
  font-weight: 700;
  align-items: center;
  background-color: #444444;

  .title {
    display: flex;
    align-items: center;
  }

  img {
    width: 47.874px;
    height: 52.978px;
  }

  img:hover {
    cursor: pointer;
  }
`;
