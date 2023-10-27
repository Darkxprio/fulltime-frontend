import { FunctionComponent, PropsWithChildren } from "react";

const Content: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};

export default Content;
