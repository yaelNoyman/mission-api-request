import { SearchBoxWrapper } from "./SearchBox.styled";
import { ChangeEvent, FC, useEffect, useState } from "react";

interface SearchBoxProps {
  onChangeInput: (data: string) => void;
}

const SearchBox: FC<SearchBoxProps> = ({ onChangeInput }: SearchBoxProps) => {
  const CLEAN_ICON = "/icons/clear-icon.svg";
  const SEARCH_ICON = "/icons/search-icon.svg";

  const [term, setTerm] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const [isShowDeleteIcon, setIsShowDeleteIcon] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const onClearInput = () => {
    setTerm(() => "");
  };

  useEffect(() => {
    if (term === "") {
      setIsShowDeleteIcon(() => false);
    } else {
      setIsShowDeleteIcon(() => true);
    }

    onChangeInput(term);
  }, [term, onChangeInput]);

  const onChangeTerm = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(() => e.target.value);
  };

  return (
    <>
      <SearchBoxWrapper $isFocused={isFocused} $term={term}>
        <div className="input-wrapper">
          <input
            value={term}
            onBlur={handleBlur}
            placeholder="חיפוש"
            onFocus={handleFocus}
            onChange={onChangeTerm}
            className="search-input"
          />
          <img src={SEARCH_ICON} className="search-icon" />
          {isShowDeleteIcon && (
            <img
              src={CLEAN_ICON}
              className="clean-icon"
              onClick={onClearInput}
            />
          )}
        </div>
      </SearchBoxWrapper>
    </>
  );
};

export default SearchBox;
