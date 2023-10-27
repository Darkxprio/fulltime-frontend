import { FunctionComponent, useEffect } from "react";
import SharedComponent from "../../Components/SharedComponent/Index";
import { useAppDispatch, useAppSelector } from "../../Store/Hooks";
import {
  RequestStatus,
  loadFrontendThunk,
} from "../../Store/Features/FrontendSlice";

const Frontend: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { data, status } = useAppSelector((state) => state.frontend);

  useEffect(() => {
    dispatch(loadFrontendThunk());
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

  return <SharedComponent title="Frontend" data={data} />;
};

export default Frontend;
