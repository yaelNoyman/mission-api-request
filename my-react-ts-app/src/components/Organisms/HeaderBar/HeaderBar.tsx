import Button from "../../Atoms/Button/Button";
import SearchBox from "../../Molecules/SearchBox/SearchBox";
import { HeaderBarWrapper } from "./HeaderBar.styled";

const HeaderBar = () => {
  const handleSearchInputChange = (value: string) => {
    console.log("Search input changed:", value);
  };
  const handleButtonChange = () => {
    console.log("add");
  };
  return (
    <HeaderBarWrapper>
      <SearchBox onChangeSearchValue={handleSearchInputChange} />
      <Button
        onClick={handleButtonChange}
        text="הוספת פוסט"
        $backgroundColor="#9BC2FD"
        $color="#0453C8"
        $iconSrc="/icons/Vector.svg"
        $width="140px"
      />
    </HeaderBarWrapper>
  );
};

export default HeaderBar;
