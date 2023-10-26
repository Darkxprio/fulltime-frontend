import { FunctionComponent, useEffect, useState } from "react";
import { CommitData, IndexProps } from "./Model";
import CardCommits from "../../../../Components/CardCommits/Index";

const Index: FunctionComponent<IndexProps> = () => {
  const [data, setData] = useState<CommitData[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/Darkxprio/fulltime-backend/commits")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  console.log(data);
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

export default Index;
