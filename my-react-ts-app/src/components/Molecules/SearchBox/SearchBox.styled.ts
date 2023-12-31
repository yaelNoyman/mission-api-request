import styled, { css } from "styled-components";

export const SearchBoxWrapper = styled.div<{ $searchvalue: string }>`
  width: 394px;
  height: 68px;
  display: flex;
  padding-right: 7px;
  align-items: center;
  flex-direction: row;
  background-color: transparent;

  .button-style:focus {
    outline: none;
  }

  a:focus,
  a:active {
    outline: none;
  }

  .input-wrapper {
    width: 97%;
    height: 45px;
    padding: 1.5%;
    display: flex;
    position: relative;
    margin-right: 1.5%;
    border-radius: 27px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    background-color: transparent;

    border-radius: 28px;
    border: 1px solid var(--Grayscale-Grayscale-Light-1, #999);
  }

  input {
    outline: none;
  }

  .x-icon {
    width: 28px;
    height: 20px;
  }

  .search-icon {
    width: 20px;
    right: 18px;
    z-index: 2;
    height: 20px;
    display: flex;
    position: relative;
    justify-content: center;
  }

  .clean-button {
    z-index: 2;
    height: 18px;
    display: flex;
    position: relative;
    justify-content: center;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  ${(props) =>
    css`
      .search-icon {
        right: ${props.$searchvalue !== "" ? "4.4px" : "4.1px"};
      }

      .clean-button {
        opacity: ${props.$searchvalue !== "" ? 1 : 0};
      }
    `}

  .custom-input:focus {
    outline: none;
  }

  .custom-input {
    z-index: 1;
    width: 100%;
    height: auto;
    color: #808080;
    outline: none;
    direction: rtl;
    text-align: right;
    font-size: 20px;
    position: relative;
    padding-right: 15px;
    border-radius: 16px;
    border: none;
    background-color: transparent;
  }

  .custom-input::-webkit-input-placeholder {
    position: absolute;
  }

  .circle {
    width: 3rem;
    height: 3rem;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: transparent;
  }

  .x {
    width: 3rem;
    height: 3rem;
  }

  .x::before,
  .x::after {
    width: 2px;
    content: "";
    height: 2rem;
    position: absolute;
    background-color: black;
  }

  .x::before {
    transform: rotate(45deg);
  }

  .x::after {
    transform: rotate(-45deg);
  }
`;
