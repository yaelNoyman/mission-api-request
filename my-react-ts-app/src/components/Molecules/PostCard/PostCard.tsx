import { FC, useState } from "react";
import Popup from "../../Atoms/Popup/Popup";
import Button from "../../Atoms/Button/Button";
import { PostCardWrapper } from "./PostCard.styled";

interface PostCardProps {
  content: string;
}

const PostCard: FC<PostCardProps> = ({ content }) => {
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
      <div className="post-content">{content}</div>
      {isEditPopupVisible && (
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
          children="עריכת פוסט קיים פרמטרים ואינפוטים כבר עם מידע בעלי אופציה לעריכה"
          $backgroundHeader="#E2BC34"
        />
      )}
      {isDeletePopupVisible && (
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
      )}
    </PostCardWrapper>
  );
};
export default PostCard;
