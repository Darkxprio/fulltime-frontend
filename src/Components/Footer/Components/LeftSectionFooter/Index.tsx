import { FunctionComponent } from "react";
import { IndexProps } from "./Model";

const Index: FunctionComponent<IndexProps> = () => {
  return (
    <div>
      <p className="text-white">
        All Rights Reserved © 2023&nbsp;
        <span className="text-[#00adef]">Fulltime Force</span>&nbsp;- Developed
        by&nbsp;<span className="font-semibold">Jordano Cuadros</span>
      </p>
    </div>
  );
};

export default Index;
