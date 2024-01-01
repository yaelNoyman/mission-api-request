import styled from "styled-components";

export const PostCardWrapper = styled.div`
  width: 95%;
  padding: 25px;
  border-radius: 18px;
  background-color: #ffffff;
  position: relative;

  .post-buttons {
    gap: 10px;
    left: 25px;
    height: auto;
    display: flex;
    position: absolute;
  }

  .post-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
