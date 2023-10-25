import { FunctionComponent, useCallback } from "react";
import { IndexProps } from "./Model";
import { Link } from "react-router-dom";

const Index: FunctionComponent<IndexProps> = ({ children, to }) => {
  const handleClick = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Link to={to} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default Index;
