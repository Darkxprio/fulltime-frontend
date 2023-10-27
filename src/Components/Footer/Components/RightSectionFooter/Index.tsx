import { FunctionComponent } from "react";
import Url from "../../../Url/Index";

const RightSectionFooter: FunctionComponent = () => {
  return (
    <div className="flex flex-row gap-3 justify-center text-white">
      <Url to="/">
        <span className="hover:text-[#00adef]">Home</span>
      </Url>
      <Url to="/frontend">
        <span className="hover:text-[#00adef]">Frontend</span>
      </Url>
      <Url to="/backend">
        <span className="hover:text-[#00adef]">Backend</span>
      </Url>
    </div>
  );
};

export default RightSectionFooter;
