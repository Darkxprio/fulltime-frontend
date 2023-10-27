import { FunctionComponent } from "react";
import ButtonMain from "./Components/ButtonMain/Index";

const Main: FunctionComponent = () => {
  return (
    <div className="lg:h-calc-vh-minus-136 md:h-calc-vh-minus-133 h-calc-vh-minus-123 flex flex-col sm:flex-row items-center justify-center gap-20">
      <ButtonMain tittle="Frontend" url="/frontend" />
      <ButtonMain tittle="Backend" url="/backend" />
    </div>
  );
};

export default Main;
