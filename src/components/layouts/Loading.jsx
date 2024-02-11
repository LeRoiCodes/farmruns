import React from "react";

import Spinner from "./loading.gif";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img src={Spinner} alt="loading gif" className="w-[150px]" />
    </div>
  );
};

export default Loading;
