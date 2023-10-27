import { FunctionComponent, useEffect } from "react";
import SharedComponent from "../../Components/SharedComponent/Index";
import { useAppDispatch, useAppSelector } from "../../Store/Hooks";
import {
  RequestStatus,
  loadBackendThunk,
} from "../../Store/Features/BackendSlice";

const Backend: FunctionComponent = () => {
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

  return <SharedComponent title="Backend" data={data} />;
};

export default Backend;
