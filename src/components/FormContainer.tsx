import React from "react";
interface Props {
  children: React.ReactNode;
  submitAction: React.FormEventHandler<HTMLFormElement>;
}
const FormContainer: React.FC<Props> = ({ children, submitAction }) => {
  return (
    <form
      onSubmit={submitAction}
      className=" flex flex-col gap-3 justify-center"
    >
      {children}
    </form>
  );
};

export default FormContainer;
