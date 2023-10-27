import { FunctionComponent } from "react";
import Header from "../Header/Index";
import Content from "../Content/Index";
import Footer from "../Footer/Index";
import { Outlet } from "react-router-dom";

const Layout: FunctionComponent = () => {
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

export default Layout;
