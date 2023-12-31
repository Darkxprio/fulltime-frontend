import { FunctionComponent } from "react";

const LeftSectionFooter: FunctionComponent = () => {
  return (
    <div className="text-white">
      <p className="hidden md:inline-block">
        All Rights Reserved © 2023&nbsp;
        <span className="text-[#00adef]">Fulltime Force</span>
      </p>
      <span>
        <span className="hidden md:inline-block">&nbsp;-&nbsp;</span>
        Developed by&nbsp;
        <span className="font-semibold">Jordano Cuadros</span>
      </span>
    </div>
  );
};

export default LeftSectionFooter;
