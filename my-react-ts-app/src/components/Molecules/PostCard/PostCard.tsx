import { FC } from "react";
import { PostCardWrapper } from "./PostCard.styled";
import Button from "../../Atoms/Button/Button";

interface PostCardProps {
  content: string;
}

const PostCard: FC<PostCardProps> = ({ content }) => {
  const handleButtonDeleteChange = () => {
    console.log("delete");
  };
  const handleButtonEditChange = () => {
    console.log("edit");
  };
  return (
    <PostCardWrapper>
      <div className="post-buttons">
        <Button
          onClick={handleButtonEditChange}
          $backgroundColor="#5CB14E"
          text="עריכה"
          $iconSrc="/icons/edit.svg"
        />
        <Button
          onClick={handleButtonDeleteChange}
          text="מחיקה"
          $backgroundColor="#F8A0A0"
          $color="#CA1313"
        />
      </div>
      <div className="post-content">{content}</div>
    </PostCardWrapper>
  );
};
export default PostCard;
