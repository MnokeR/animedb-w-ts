import DarkMode from "./DarkMode";
import HeaderWrapper from "./HeaderWrapper";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <Navbar />
      <DarkMode />
    </HeaderWrapper>
  );
}

export default Header;
