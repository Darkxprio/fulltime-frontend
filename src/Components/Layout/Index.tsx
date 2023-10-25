import { FunctionComponent } from "react";
import { IndexProps } from "./Model";
import Header from "../Header/Index";
import Content from "../Content/Index";
import Footer from "../Footer/Index";
import { Outlet } from "react-router-dom";

const Index: FunctionComponent<IndexProps> = () => {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </>
  );
};

export default Index;
