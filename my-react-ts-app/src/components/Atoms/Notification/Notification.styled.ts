import styled from "styled-components";

export const NotificationWrapper = styled.div<{
  $backgroundColor: string;
  isVisible: boolean;
}>`
  top: 15%;
  margin: 0;
  height: 20%;
  width: 100%;
  color: white;
  position: fixed;
  background-color: ${(props) => props.$backgroundColor};
  display: ${(props) => (props.isVisible ? "block" : "none")};

  .message {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
