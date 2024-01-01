import { FC, useState } from "react";
import Popup from "../../Atoms/Popup/Popup";
import Button from "../../Atoms/Button/Button";
import { HeaderBarWrapper } from "./HeaderBar.styled";
import TextField from "../../Atoms/TextField/TextField";
import PopupBehavior from "../../Behavior/PopupBehavior";
import SearchBox from "../../Molecules/SearchBox/SearchBox";

interface HeaderBarProps {
  onChangeSearchValue: (value: string) => void;
}

const HeaderBar: FC<HeaderBarProps> = ({ onChangeSearchValue }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
  });

  const handleSearchInputChange = (value: string) => {
    // console.log("Search input changed:", value);
    onChangeSearchValue(value);
  };
  const handleButtonChange = () => {
    console.log("add");
    setPopupVisible(true);
  };
  const handleClosePopup = () => {
    setPopupVisible(false);
  };
  const handleInputChange = (field: string, value: string) => {
    setNewPost((prevPost) => ({
      ...prevPost,
      [field]: value,
    }));
  };
  const handleAddPost = () => {
    console.log("New Post:", newPost);

    setNewPost({
      title: "",
      body: "",
    });
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
                onClick={handleClosePopup}
              />
            }
            submitButton={
              <Button
                text="אישור"
                $width="140px"
                $color="#FFF"
                $backgroundColor="#0453C8"
                onClick={handleAddPost}
              />
            }
            title="הוספת פוסט חדש"
            children={
              <div className="edit-post">
                <TextField
                  label="כותרת"
                  placeholder="הקלד כאן כותרת..."
                  showCloseButton={true}
                  onChange={(value) => handleInputChange("title", value)}
                />
                <TextField
                  label="תוכן"
                  rows={3}
                  showCloseButton={true}
                  onChange={(value) => handleInputChange("body", value)}
                  placeholder="הקלד כאן תוכן..."
                />
              </div>
            }
            closelick={handleClosePopup}
            $backgroundHeader="#0453C8"
          />
        </PopupBehavior>
      )}
    </HeaderBarWrapper>
  );
};

export default HeaderBar;
