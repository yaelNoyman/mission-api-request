import styled from "styled-components";

export const PopupBehaviorWrapper = styled.div<{
  $width?: string;
  $height?: string;
}>`
  top: 50%;
  left: 50%;
  z-index: 100;
  height: auto;
  margin: auto;
  display: flex;
  overflow: visible;
  align-self: center;
  position: absolute;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => props.$width || "80%"};
  height: ${(props) => props.$height || "auto"};
`;
