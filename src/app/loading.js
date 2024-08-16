import React from "react";
import MyLoader from "@/components/ui/Loader/MyLoader";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <MyLoader />
    </div>
  );
};

export default Loading;
