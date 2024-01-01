import Header from "../../Organisms/Header/Header";
import { HomePageWrapper } from "./HomePage.styled";
import PostCard from "../../Molecules/PostCard/PostCard";
import HeaderBar from "../../Organisms/HeaderBar/HeaderBar";
import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  const [data, setData] = useState<
    {
      userId: number;
      id: number;
      title: string;
      body: string;
    }[]
  >([]);

  const [filteredPosts, setFilteredPosts] = useState<
    {
      userId: number;
      id: number;
      title: string;
      body: string;
    }[]
  >([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
        setFilteredPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearchInputChange = (value: string) => {
    console.log(value);
    const filtered = data.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  useEffect(() => {
    handleSearchInputChange(searchValue);
  }, [searchValue]);

  return (
    <HomePageWrapper>
      <Header iconSrc="/icons/Group8.svg" title="HORIZON TEAM" />
      <HeaderBar
        onChangeSearchValue={(value: string) => {
          setSearchValue(value);
        }}
      />
      {filteredPosts.map((post) => (
        <PostCard key={post.id} title={post.title} content={post.body} />
      ))}
    </HomePageWrapper>
  );
}

export default HomePage;
