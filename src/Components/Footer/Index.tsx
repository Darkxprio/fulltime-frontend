import { FunctionComponent } from "react";
import { IndexProps } from "./Model";
import LeftSectionFooter from "./Components/LeftSectionFooter/Index";
import RightSectionFooter from "./Components/RightSectionFooter/Index";

const Index: FunctionComponent<IndexProps> = () => {
  return (
    <footer className="flex justify-center bg-[#485665] w-full px-3 py-2 md:px-5 lg:py-3">
      <div className="flex flex-col text-center lg:flex-row lg:justify-between w-full xl:w-[1200px]">
        <LeftSectionFooter />
        <RightSectionFooter />
      </div>
    </footer>
  );
};

export default Index;
