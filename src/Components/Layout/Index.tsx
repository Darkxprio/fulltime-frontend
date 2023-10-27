import { FunctionComponent, useEffect, useState } from "react";
import Header from "../Header/Index";
import Content from "../Content/Index";
import Footer from "../Footer/Index";
import { Outlet, useLocation } from "react-router-dom";

const Layout: FunctionComponent = () => {
  const [hasRendered, setHasRendered] = useState<boolean>(false);
  let location = useLocation();

  useEffect(() => {
    if (!hasRendered) {
      window.scrollTo(0, 0);
      setHasRendered(true);
    }
  }, [hasRendered, location]);

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
