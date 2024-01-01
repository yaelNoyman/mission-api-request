import { FC, useState } from "react";
import Popup from "../../Atoms/Popup/Popup";
import Button from "../../Atoms/Button/Button";
import { PostCardWrapper } from "./PostCard.styled";
import TextField from "../../Atoms/TextField/TextField";
import PopupBehavior from "../../Behavior/PopupBehavior";

interface PostCardProps {
  title: string;
  content: string;
}

const PostCard: FC<PostCardProps> = ({ content, title }) => {
  const [isEditPopupVisible, setEditPopupVisible] = useState(false);
  const [isDeletePopupVisible, setDeletePopupVisible] = useState(false);

  const handleButtonEditChange = () => {
    console.log("edit");
    setEditPopupVisible(true);
  };

  const handleButtonDeleteChange = () => {
    console.log("delete");
    setDeletePopupVisible(true);
  };

  const handleCloseEditPopup = () => {
    setEditPopupVisible(false);
  };

  const handleCloseDeletePopup = () => {
    setDeletePopupVisible(false);
  };
  const handleInputChange = (value: string) => {
    console.log("Title changed:", value);
  };

  return (
    <PostCardWrapper>
      <div className="post-buttons">
        <Button
          onClick={handleButtonDeleteChange}
          text="מחיקה"
          $backgroundColor="#F8A0A0"
          $color="#CA1313"
        />
        <Button
          onClick={handleButtonEditChange}
          $backgroundColor="#5CB14E"
          text="עריכה"
          $iconSrc="/icons/edit.svg"
        />
      </div>
      <div className="post-title">{title}</div>
      <div className="post-content">{content}</div>
      {isEditPopupVisible && (
        <PopupBehavior
          isOpen={true}
          closeClick={handleCloseEditPopup}
          $width="60%"
          $height="50%"
        >
          <Popup
            closelick={handleCloseEditPopup}
            descriptionTitle=""
            cancelButton={
              <Button
                text="ביטול"
                $width="140px"
                $color="#0453C8"
                $backgroundColor="#FFF"
                onClick={handleCloseEditPopup}
              />
            }
            submitButton={
              <Button
                text="שמירת השינויים"
                $width="140px"
                $color="#FFF"
                $backgroundColor="#0453C8"
                onClick={handleButtonEditChange}
              />
            }
            title="עריכת פוסט"
            children={
              <div className="edit-post">
                <TextField
                  label="כותרת"
                  placeholder="הקלד כאן כותרת..."
                  showCloseButton={true}
                  onChange={handleInputChange}
                />
                <TextField
                  label="תוכן"
                  rows={3}
                  showCloseButton={true}
                  onChange={handleInputChange}
                  placeholder="הקלד כאן תוכן..."
                />
              </div>
            }
            $backgroundHeader="#E2BC34"
          />
        </PopupBehavior>
      )}
      {isDeletePopupVisible && (
        <PopupBehavior
          isOpen={true}
          closeClick={handleCloseDeletePopup}
          $width="60%"
          $height="50%"
        >
          <Popup
            closelick={handleCloseDeletePopup}
            descriptionTitle=""
            cancelButton={
              <Button
                text="אישור"
                $width="140px"
                $color="#0453C8"
                $backgroundColor="#FFF"
                onClick={handleCloseDeletePopup}
              />
            }
            submitButton={
              <Button
                text="מחק"
                $width="140px"
                $color="#FFF"
                $backgroundColor="#0453C8"
                onClick={handleButtonDeleteChange}
              />
            }
            title="מחיקת פוסט"
            children="הנך בטוח שתרצה למחוק את הפוסט?"
            $backgroundHeader="#FF4C4C"
          />
        </PopupBehavior>
      )}
    </PostCardWrapper>
  );
};
export default PostCard;
