import { SearchBoxWrapper } from "./SearchBox.styled";
import { FC, useState, useEffect, ChangeEvent, memo } from "react";

interface SearchBoxProps {
  onChangeSearchValue: (searchValue: string) => void;
}

const SearchBox: FC<SearchBoxProps> = memo(
  ({ onChangeSearchValue }: SearchBoxProps) => {
    const [searchValue, setSearchValue] = useState<string>("");

    const SEARCH_ICON = "/icons/search-icon.svg";
    const X_ICON = "/icons/clear-icon.svg";

    useEffect(() => {
      onChangeSearchValue(searchValue);
    }, [searchValue, onChangeSearchValue]);

    const changeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(() => e.target.value);
    };

    return (
      <SearchBoxWrapper $searchvalue={searchValue} data-testid="SearchBox">
        <div className="input-wrapper">
          <div className="search-icon">
            <img src={SEARCH_ICON} />
          </div>
          <input
            type="text"
            value={searchValue}
            placeholder="חיפוש"
            className="custom-input"
            onChange={changeSearchValue}
          />
          <div
            className="clean-button"
            onClick={() => setSearchValue(() => "")}
          >
            <img className="x-icon" src={X_ICON} />
          </div>
        </div>
      </SearchBoxWrapper>
    );
  }
);

export default SearchBox;
