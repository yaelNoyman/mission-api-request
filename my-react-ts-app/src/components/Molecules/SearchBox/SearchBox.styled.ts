import styled from "styled-components";

export const SearchBoxWrapper = styled.div<{
  $term: string;
  $isFocused: boolean;
}>`
  width: 100%;
  position: relative;

  .input-wrapper {
    width: 100%;
    height: 50px;
    border-radius: 40px;
    position: relative;
    border: ${(props) =>
      !props?.$isFocused ? "1px solid #e6e6e6" : "2.5px solid #3BBEF2"};
  }

  .search-input {
    width: 100%;
    outline: none;
    font-size: 16px;
    text-align: right;
    border-radius: 40px;
    padding-right: ${(props) => (props.$isFocused ? "42px" : "43px")};
  }

  .search-icon {
    height: 20px;
    position: absolute;
    top: ${(props) => (props.$isFocused ? "13px" : "13.5px")};
    right: ${(props) => (props.$isFocused ? "11px" : "12px")};
  }

  .clean-icon {
    height: 20px;
    cursor: pointer;
    position: absolute;
    top: ${(props) => (props.$isFocused ? "13px" : "13.5px")};
    left: ${(props) => (props.$isFocused ? "12.5px" : "13px")};
  }
`;
