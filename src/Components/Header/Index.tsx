import { FunctionComponent } from "react";
import MainHeader from "./Components/MainHeader/Index";
import ToTopButton from "./Components/ToTopButton/Index";

const Header: FunctionComponent = () => {
  return (
    <header>
      <MainHeader />
      <ToTopButton />
    </header>
  );
};

export default Header;
