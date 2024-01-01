import styled from "styled-components";

export const PostCardWrapper = styled.div`
  width: 95%;
  height: 50%;
  margin: 32px;
  padding: 25px;
  direction: rtl;
  position: relative;
  border-radius: 18px;
  background-color: #ffffff;

  .edit-post {
    padding: 10px;
  }

  .post-title {
    display: flex;
    margin-top: 60px;
    font-weight: 700;
    justify-content: center;
  }

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
