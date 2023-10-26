import { FunctionComponent } from "react";
import { IndexProps } from "./Model";
import Url from "../../../../Components/Url/Index";

const Index: FunctionComponent<IndexProps> = ({ tittle, url }) => {
  return (
    <Url to={url}>
      <button className="py-5 px-6 rounded-xl border-2 hover:border-[#00adef] text-[50px] italic md:py-8 md:px:9 md:text-[70px] xl:py-11 xl:px-12 xl:text-[90px]">
        {tittle}
      </button>
    </Url>
  );
};

export default Index;
