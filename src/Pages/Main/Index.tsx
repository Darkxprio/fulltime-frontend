import { FunctionComponent } from "react";
import { IndexProps } from "./Model";
import ButtonMain from "./Components/ButtonMain/Index";

const Index: FunctionComponent<IndexProps> = () => {
  return (
    <div className="lg:h-calc-vh-minus-136 md:h-calc-vh-minus-133 h-calc-vh-minus-123 flex flex-col sm:flex-row items-center justify-center gap-20">
      <ButtonMain tittle="Frontend" url="/frontend" />
      <ButtonMain tittle="Backend" url="/backend" />
    </div>
  );
};

export default Index;
