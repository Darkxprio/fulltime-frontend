import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainHeader: FunctionComponent = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos <= 34) {
        setIsHeaderFixed(false);
      } else if (prevScrollPos > currentScrollPos) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`flex xl:justify-center px-3 py-2 bg-white shadow-md md:px-5 lg:py-3 w-full ${
        isHeaderFixed ? "fixed top-0 left-0 w-full z-10" : "relative"
      }`}
    >
      <div className="flex justify-between w-full items-center xl:w-[1200px]">
        <Link to="/">
          <img
            src="https://uploads-ssl.webflow.com/643458de4c12c42a070ce23a/64dcc8c9fad4ead0c55b75ed_Vectors-Wrapper.svg"
            alt="Logo Fulltime Force"
            className="w-16 md:w-20 lg:w-24"
          />
        </Link>
        <h1 className="text-[20px] md:text-[24px] lg:text-[30px] italic font-medium whitespace-nowrap hover:text-[#00adef]">
          Jordano Cuadros
        </h1>
      </div>
    </div>
  );
};

export default MainHeader;
