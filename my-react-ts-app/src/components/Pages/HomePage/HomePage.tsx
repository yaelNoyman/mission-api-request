import Header from "../../Organisms/Header/Header";
import { HomePageWrapper } from "./HomePage.styled";

import HeaderBar from "../../Organisms/HeaderBar/HeaderBar";
import Body from "../../Organisms/Body/Body";

function HomePage() {
  return (
    <HomePageWrapper>
      <Header iconSrc="/icons/Group8.svg" title="HORIZON TEAM" />
      <HeaderBar />
      <Body />
    </HomePageWrapper>
  );
}

export default HomePage;
