import { FunctionComponent } from "react";
import { IndexProps } from "./Model";
import MainHeader from "./Components/MainHeader/Index";
import ToTopButton from "./Components/ToTopButton/Index";

const Index: FunctionComponent<IndexProps> = () => {
  return (
    <header>
      <MainHeader />
      <ToTopButton />
    </header>
  );
};

export default Index;
