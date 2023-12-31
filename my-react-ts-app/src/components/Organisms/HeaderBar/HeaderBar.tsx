import SearchBox from "../../Molecules/SearchBox/SearchBox";
import { HeaderBarWrapper } from "./HeaderBar.styled";

const HeaderBar = () => {
  const handleSearchInputChange = (value: string) => {
    console.log("Search input changed:", value);
  };
  return (
    <HeaderBarWrapper>
      <SearchBox onChangeInput={handleSearchInputChange} />
    </HeaderBarWrapper>
  );
};

export default HeaderBar;
