import { FunctionComponent } from "react";
import { IndexProps } from "./Model";
import { Link } from "react-router-dom";

const ButtonMain: FunctionComponent<IndexProps> = ({ tittle, url }) => {
  return (
    <Link to={url}>
      <button className="py-5 px-6 rounded-xl border-2 hover:border-[#00adef] text-[50px] italic md:py-8 md:px:9 md:text-[70px] xl:py-11 xl:px-12 xl:text-[90px]">
        {tittle}
      </button>
    </Link>
  );
};

export default ButtonMain;
