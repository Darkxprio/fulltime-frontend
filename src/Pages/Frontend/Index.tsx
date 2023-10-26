import { FunctionComponent } from "react";
import { IndexProps } from "./Model";
import TopSection from "./Components/TopSectionFrontend/Index";
import CardsSection from "./Components/CardsSection/Index";

const Index: FunctionComponent<IndexProps> = () => {
  return (
    <div className="flex flex-col text-center my-5">
      <TopSection />
      <CardsSection />
    </div>
  );
};

export default Index;
