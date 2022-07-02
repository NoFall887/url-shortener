import React from "react";

interface Props {
  children: React.ReactNode;
  action?: () => void;
  submitType?: boolean;
}

const MainBtn: React.FC<Props> = ({ children, action, submitType = false }) => {
  return (
    <button
      onClick={action}
      type={submitType ? "submit" : undefined}
      className={
        "bg-violet-800 border-2 border-violet-800 active:text-violet-900 active:bg-violet-100 transition-all hover:bg-violet-600 hover:border-violet-600 hover:-translate-y-1 font-bold text-white px-3 shadow-md py-2 align-middle mt-6"
      }
    >
      {children}
    </button>
  );
};

export default MainBtn;
