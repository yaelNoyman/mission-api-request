import { BodyWrapper } from "./Body.styled";
import PostCard from "../../Molecules/PostCard/PostCard";

function HomePage() {
  return (
    <BodyWrapper>
      <PostCard content="post" />
    </BodyWrapper>
  );
}

export default HomePage;
