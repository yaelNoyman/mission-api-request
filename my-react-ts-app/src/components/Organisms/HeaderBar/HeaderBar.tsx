import { useState } from "react";
import Popup from "../../Atoms/Popup/Popup";
import Button from "../../Atoms/Button/Button";
import { HeaderBarWrapper } from "./HeaderBar.styled";
import SearchBox from "../../Molecules/SearchBox/SearchBox";
import PopupBehavior from "../../Behavior/PopupBehavior";

const HeaderBar = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleSearchInputChange = (value: string) => {
    console.log("Search input changed:", value);
  };
  const handleButtonChange = () => {
    console.log("add");
    setPopupVisible(true);
  };
  const handleClosePopup = () => {
    setPopupVisible(false);
  };
  return (
    <HeaderBarWrapper>
      <SearchBox onChangeSearchValue={handleSearchInputChange} />
      <Button
        $width="140px"
        $color="#0453C8"
        text="הוספת פוסט"
        $iconSrc="/icons/Vector.svg"
        $backgroundColor="#9BC2FD"
        onClick={handleButtonChange}
      />
      {isPopupVisible && (
        <PopupBehavior
          isOpen={true}
          closeClick={handleClosePopup}
          $width="60%"
          $height="50%"
        >
          <Popup
            descriptionTitle=""
            cancelButton={
              <Button
                text="ביטול"
                $width="140px"
                $color="#0453C8"
                $backgroundColor="#FFF"
                onClick={handleButtonChange}
              />
            }
            submitButton={
              <Button
                text="אישור"
                $width="140px"
                $color="#FFF"
                $backgroundColor="#0453C8"
                onClick={handleButtonChange}
              />
            }
            title="הוספת פוסט חדש"
            children="הוספת פוסט חדש"
            closelick={handleClosePopup}
            $backgroundHeader="#0453C8"
          />
        </PopupBehavior>
      )}
    </HeaderBarWrapper>
  );
};

export default HeaderBar;
