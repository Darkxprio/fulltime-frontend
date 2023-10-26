import { FunctionComponent } from "react";
import { IndexProps } from "./Model";

const Index: FunctionComponent<IndexProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default Index;
