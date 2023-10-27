import { FunctionComponent } from "react";
import { TopSectionProps } from "./Model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TopSection: FunctionComponent<TopSectionProps> = ({ title }) => {
  return (
    <div className="mb-8">
      <h2 className="font-bold text-[25px] md:text-[30px] lg:text-[35px] mb-4">
        {title}
      </h2>
      <Link to="/">
        <span className="hover:text-[#00adef] cursor-pointer border border-[#00adef] hover:border-black py-3 px-4 rounded-full">
          Back Home&nbsp;
          <FontAwesomeIcon icon={faHouse} />
        </span>
      </Link>
    </div>
  );
};

export default TopSection;
