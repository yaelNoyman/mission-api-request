import styled from "styled-components";

export const ScreenDimmerWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`;
