import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const RightSectionFooter: FunctionComponent = () => {
  return (
    <div className="flex flex-row gap-3 justify-center text-white">
      <Link to="/">
        <span className="hover:text-[#00adef]">Home</span>
      </Link>
      <Link to="/frontend">
        <span className="hover:text-[#00adef]">Frontend</span>
      </Link>
      <Link to="/backend">
        <span className="hover:text-[#00adef]">Backend</span>
      </Link>
    </div>
  );
};

export default RightSectionFooter;
