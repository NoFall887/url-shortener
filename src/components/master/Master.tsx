import React from "react";
import NavsButtons from "./NavsButtons";

interface Props {
  children: React.ReactNode;
}

const Master: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center flex-col items-center gap-4 min-h-screen w-full bg-violet-100">
      <h1 className="text-purple-700 text-center font-bold font-sans text-5xl mt-2 mb-8">
        Url Shortener
      </h1>
      <NavsButtons />
      {children}
    </div>
  );
};

export default Master;
