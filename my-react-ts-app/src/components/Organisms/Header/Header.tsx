import { HeaderWrapper } from "./Header.styled";
import { FC } from "react";

interface HeaderProps {
  iconSrc: string;
  title: string;
}

const Header: FC<HeaderProps> = ({ iconSrc, title }) => {
  const handleIconClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <HeaderWrapper>
      <img src={iconSrc} onClick={handleIconClick} />
      <div className="title">{title}</div>
    </HeaderWrapper>
  );
};

export default Header;
