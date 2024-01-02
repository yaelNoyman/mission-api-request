import Popup from "../../Atoms/Popup/Popup";
import Button from "../../Atoms/Button/Button";
import { FC, useState, useEffect } from "react";
import { PostCardWrapper } from "./PostCard.styled";
import TextField from "../../Atoms/TextField/TextField";
import PopupBehavior from "../../Behavior/PopupBehavior";
import Notification from "../../Atoms/Notification/Notification";

interface PostCardProps {
  id: number;
  title: string;
  content: string;
  onDeletePost: (id: number) => void;
  onEditPost: (id: number, editedTitle: string, editedContent: string) => void;
}

const PostCard: FC<PostCardProps> = ({
  id,
  content,
  title,
  onEditPost,
  onDeletePost,
}) => {
  const [isEditPopupVisible, setEditPopupVisible] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);
  const [isDeletePopupVisible, setDeletePopupVisible] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    backgroundColor: string;
  }>({ message: "", backgroundColor: "" });
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    setEditedTitle(title);
    setEditedContent(content);
  }, [title, content]);

  const handleButtonEditChange = () => {
    setEditPopupVisible(true);
  };

  const handleButtonDeleteChange = () => {
    setEditedTitle(editedTitle);
    setEditedContent(editedContent);
    setDeletePopupVisible(true);
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === "title") {
      setEditedTitle(value);
    } else if (field === "content") {
      setEditedContent(value);
    }
  };

  const handleSaveChanges = () => {
    if (editedTitle !== title || editedContent !== content) {
      onEditPost(id, editedTitle, editedContent);
      setNotification({
        message: "שינויים הועלו בהצלחה",
        backgroundColor: "#E0CD88",
      });
      setShowNotification(true);
    } else {
      setNotification({
        message: "אין שינויים לשמירה",
        backgroundColor: "#E0CD88",
      });
      setShowNotification(true);
    }

    setEditPopupVisible(false);
  };

  const handleCloseEditPopup = () => {
    setEditPopupVisible(false);
  };

  const handleDeletePost = () => {
    setNotification({
      message: "הפוסט נמחק בהצלחה",
      backgroundColor: "#FE6666",
    });
    onDeletePost(id);

    setShowNotification(true);
    setDeletePopupVisible(false);
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
      <div className="post-title">{title}</div>
      <div className="post-content">{content}</div>
      {isEditPopupVisible && (
        <PopupBehavior
          isOpen={true}
          closeClick={handleCloseEditPopup}
          $width="50%"
          $height="60%"
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
                onClick={handleSaveChanges}
              />
            }
            title="עריכת פוסט"
            children={
              <div className="edit-post">
                <TextField
                  label="כותרת"
                  value={editedTitle}
                  showCloseButton={true}
                  placeholder={editedTitle}
                  onChange={(value) => handleInputChange("title", value)}
                />
                <TextField
                  rows={3}
                  label="תוכן"
                  value={editedContent}
                  showCloseButton={true}
                  placeholder={editedContent}
                  onChange={(value) => handleInputChange("content", value)}
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
          $width="50%"
          $height="60%"
        >
          <Popup
            closelick={handleCloseDeletePopup}
            descriptionTitle=""
            cancelButton={
              <Button
                text="ביטול"
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
                onClick={handleDeletePost}
              />
            }
            title="מחיקת פוסט"
            children="הנך בטוח שתרצה למחוק את הפוסט?"
            $backgroundHeader="#FF4C4C"
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
    </PostCardWrapper>
  );
};
export default PostCard;
