import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ToTopButton: FunctionComponent = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <button
      className={`bg-white w-[50px] h-[50px] fixed z-10 justify-center items-center bottom-[101px] right-[12px] sm:bottom-[77px] lg:bottom-[61px] lg:right-[12px] border-[3px] border-gray-500 hover:cursor-pointer ${
        isScrolled ? " flex" : " hidden"
      }`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </button>
  );
};

export default ToTopButton;
