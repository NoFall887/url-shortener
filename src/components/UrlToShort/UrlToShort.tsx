import React, { useState } from "react";
import FormContainer from "../FormContainer";
import MainBtn from "../MainBtn";
import MainContainer from "../MainContainer";
import TextInput from "../TextInput";

const UrlToShort = () => {
  const [url, setUrl] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
  }

  return (
    <MainContainer>
      <FormContainer submitAction={handleSubmit}>
        <TextInput
          state={url}
          setStateAction={setUrl}
          label="Enter your URL below!"
        />
        <MainBtn submitType={true}>Shorten URL</MainBtn>
      </FormContainer>
    </MainContainer>
  );
};

export default UrlToShort;
