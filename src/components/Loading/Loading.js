import React from "react";
import loadingImage from "../../assets/image/loading.gif";
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img width={200} src={loadingImage} alt="" />
    </div>
  );
};

export default Loading;
