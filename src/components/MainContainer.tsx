import React from "react";

interface Props {
  children: React.ReactNode;
}

const MainContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="p-6 drop-shadow-2xl max-w-2xl w-full border-4 border-violet-700 bg-white">
      {children}
    </div>
  );
};

export default MainContainer;
