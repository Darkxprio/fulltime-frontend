import { FunctionComponent } from "react";
import { CardsSectionProps } from "./Model";
import CardCommits from "../../../CardCommits/Index";

const CardsSection: FunctionComponent<CardsSectionProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      {data &&
        data.map((item, index) => (
          <CardCommits
            key={index}
            name={item.commit.author.name}
            date={item.commit.author.date}
            email={item.commit.author.email}
            message={item.commit.message}
            html_url={item.html_url}
          ></CardCommits>
        ))}
    </div>
  );
};

export default CardsSection;
