import Popup from "../../Atoms/Popup/Popup";
import Button from "../../Atoms/Button/Button";
import { FC, useState, useEffect } from "react";
import { HeaderBarWrapper } from "./HeaderBar.styled";
import TextField from "../../Atoms/TextField/TextField";
import PopupBehavior from "../../Behavior/PopupBehavior";
import SearchBox from "../../Molecules/SearchBox/SearchBox";
import Notification from "../../Atoms/Notification/Notification";

interface HeaderBarProps {
  onChangeSearchValue: (value: string) => void;
}

const HeaderBar: FC<HeaderBarProps> = ({ onChangeSearchValue }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    backgroundColor: string;
  }>({ message: "", backgroundColor: "" });
  const [showNotification, setShowNotification] = useState(false);
  const [newPost, setNewPost] = useState({
    userId: "1",
    title: "",
    body: "",
  });

  const handleSearchInputChange = (value: string) => {
    onChangeSearchValue(value);
  };
  const handleButtonChange = () => {
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
    setNotification({
      message: "הפוסט פורסם בהצלחה",
      backgroundColor: "#7F99C1",
    });
    setShowNotification(true);
    setNewPost({
      userId: "1",
      title: "",
      body: "",
    });
    setPopupVisible(false);
  };

  useEffect(() => {
    const notificationTimeout = setTimeout(() => {
      setShowNotification(false);
    }, 2000);

    return () => clearTimeout(notificationTimeout);
  }, [showNotification]);

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
          $width="50%"
          $height="60%"
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
                  id="postTitle"
                  label="כותרת"
                  placeholder="הקלד כאן כותרת..."
                  showCloseButton={true}
                  onChange={(value) => handleInputChange("title", value)}
                />
                <TextField
                  id="postBody"
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
      {showNotification && (
        <Notification
          message={notification.message}
          $backgroundColor={notification.backgroundColor}
          setShowNotification={setShowNotification}
          showNotification={showNotification}
        />
      )}
    </HeaderBarWrapper>
  );
};

export default HeaderBar;
