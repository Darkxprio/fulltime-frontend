import { FunctionComponent, useCallback, useMemo, useState } from "react";
import { IndexProps } from "./Model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const CardCommits: FunctionComponent<IndexProps> = ({
  name,
  date,
  email,
  html_url,
  message,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleCheckCommit = useCallback(() => {
    window.open(html_url, "_blank");
  }, [html_url]);

  const funcionalDate = useMemo(() => {
    return new Date(date);
  }, [date]);

  const formattedDate = useMemo(() => {
    return funcionalDate.toISOString().slice(0, 19).replace("T", " ");
  }, [funcionalDate]);

  return (
    <div className="w-full flex justify-center">
      <div className="grid w-[85%] sm:w-[65%] md:w-[70%] lg:w-[65%] xl:w-[800px] grid-cols-10 items-center flex-col p-3 border hover:border-[#00adef]">
        <div className="col-span-7 md:col-span-8 flex flex-col items-start text-left">
          <p>
            Date:&nbsp;<span>{formattedDate}</span>
          </p>
          <p>
            Author:&nbsp;<span>{name}</span>
          </p>
          <p className="hidden sm:block">
            Email:&nbsp;<span>{email}</span>
          </p>
          <p>
            Message:&nbsp;<span>{message}</span>
          </p>
        </div>
        <div className="flex items-center justify-center col-span-3 md:col-span-2 relative">
          {isHovered && (
            <span className="text-xs text-white absolute -top-6 bg-[#485665] rounded-full px-2 before:w-0 before:h-0 before:border-t-[8px] before:border-t-[#485665] before:border-l-[4px] before:border-l-transparent before:border-r-[4px] before:border-r-transparent before:absolute before:-bottom-[8px] before:left-[50%] before:-translate-x-1/2">
              Go Link
            </span>
          )}
          <FontAwesomeIcon
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleCheckCommit}
            icon={faGithub}
            className="text-[50px] hover:text-[#00adef] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CardCommits;
