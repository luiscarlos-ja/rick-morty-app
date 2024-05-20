import { RingLoader } from "react-spinners";

import { LoadingContainer } from "./loading.styles";

function Loading() {
  return (
    <LoadingContainer>
      <RingLoader color="#36d7b7" />
    </LoadingContainer>
  );
}

export default Loading;
