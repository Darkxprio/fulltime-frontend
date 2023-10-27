import { FunctionComponent } from "react";
import { SharedComponentProps } from "./Model";
import TopSection from "./Components/TopSection/Index";
import CardsSection from "./Components/CardsSection/Index";

const SharedComponent: FunctionComponent<SharedComponentProps> = ({
  title,
  data,
}) => {
  return (
    <div className="flex flex-col text-center my-5">
      <TopSection title={title} />
      <CardsSection data={data} />
    </div>
  );
};

export default SharedComponent;
