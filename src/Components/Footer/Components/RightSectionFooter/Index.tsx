import { FunctionComponent } from "react";
import { IndexProps } from "./Model";
import Url from "../../../Url/Index";

const Index: FunctionComponent<IndexProps> = () => {
  return (
    <div className="flex flex-row gap-3 justify-center text-white">
      <Url to="/">
        <span className="hover:text-[#00adef]">Index</span>
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

export default Index;
