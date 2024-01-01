import { HeaderWrapper } from "./Header.styled";
import { FC } from "react";

interface HeaderProps {
  iconSrc: string;
  title: string;
}

const Header: FC<HeaderProps> = ({ iconSrc, title }) => {
  return (
    <HeaderWrapper>
      <img src={iconSrc} />
      <div className="title">{title}</div>
    </HeaderWrapper>
  );
};

export default Header;
