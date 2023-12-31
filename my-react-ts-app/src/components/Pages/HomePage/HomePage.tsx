import Header from "../../Organisms/Header/Header";
import { HomePageWrapper } from "./HomePage.styled";
import PostCard from "../../Molecules/PostCard/PostCard";
import HeaderBar from "../../Organisms/HeaderBar/HeaderBar";

function HomePage() {
  return (
    <HomePageWrapper>
      <Header iconSrc="/icons/Group8.svg" title="HORIZON TEAM" />
      <HeaderBar />
      <PostCard content="post" />
    </HomePageWrapper>
  );
}

export default HomePage;
