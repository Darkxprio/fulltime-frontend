import { FunctionComponent, useEffect } from "react";
import { IndexProps } from "./Model";
import CardCommits from "../../../../Components/CardCommits/Index";
import { useAppDispatch, useAppSelector } from "../../../../Store/Hooks";
import {
  RequestStatus,
  loadBackendThunk,
} from "../../../../Store/Features/BackendSlice";

const Index: FunctionComponent<IndexProps> = () => {
  const dispatch = useAppDispatch();
  const { data, status } = useAppSelector((state) => state.backend);

  useEffect(() => {
    dispatch(loadBackendThunk());
  }, [dispatch]);

  if (status === RequestStatus.pending) {
    return <div>Loading...</div>;
  }

  if (status === RequestStatus.failed) {
    return <div>Failed</div>;
  }

  if (status === RequestStatus.idle) {
    return <div>Please load again</div>;
  }

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
