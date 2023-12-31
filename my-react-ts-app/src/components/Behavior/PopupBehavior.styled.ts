import styled from "styled-components";

export const PopupBehaviorWrapper = styled.div<{
  $width?: string;
  $height?: string;
}>`
  display: flex;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => props.$width || "80%"};
  height: ${(props) => props.$height || "auto"};
  overflow: visible;
  z-index: 100;
  align-self: center;
  margin: auto;
`;
