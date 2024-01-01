import styled from "styled-components";

export const TextFieldWrapper = styled.div<{ $width?: string }>`
  display: flex;
  height: auto;
  font-size: 14px;
  margin-bottom: 16px;
  flex-direction: column;

  label {
    font-weight: 400;
    text-align: right;
    padding-right: 5px;
    color: var(--Grayscale-Grayscale-Light-1, #999);
  }

  .textField-container {
    position: relative;
    width: ${(props) => props.$width || "400px"};
  }

  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    outline: none;
    padding: 10px;
    padding-left: 24px;
    display: flex;
    color: #37474f;
    text-align: right;
    position: relative;
    border-radius: 15px;
    line-height: normal;
    justify-content: flex-end;
    background: var(--Grayscale-Grayscale-White, #fff);
    border: 1px solid var(--Grayscale-Grayscale-Light-1, #999);
  }

  textarea::-webkit-scrollbar {
    width: 4px;
  }

  textarea::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #d9d9d9;
    border: 5px solid transparent;
  }

  textarea:focus {
    border: 1.5px solid var(--Focus, #0567fa);
  }

  img {
    left: 5px;
    top: 50%;
    width: 20px;
    height: 19px;
    cursor: pointer;
    position: absolute;
    transform: translateY(-50%);
  }

  .left-icon {
    top: 20px;
  }
`;
