import styled from "styled-components";

export const PostCardWrapper = styled.div`
  width: 80%;
  height: 40%;
  padding: 8px;
  flex-shrink: 0;
  border-radius: 24px;
  background-color: #ffffff;

  .post-buttons {
    gap: 10px;
    display: flex;
    align-items: start;
  }

  .post-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
