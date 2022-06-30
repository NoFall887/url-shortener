import React, { useState } from "react";
import FormContainer from "../FormContainer";
import MainBtn from "../MainBtn";
import MainContainer from "../MainContainer";
import TextInput from "../TextInput";

const UrlToShort = () => {
  const [url, setUrl] = useState<string>("");

  function handleSubmit() {}

  return (
    <MainContainer>
      <FormContainer submitAction={handleSubmit}>
        <TextInput
          state={url}
          setStateAction={setUrl}
          label="Enter your Url below!"
        />
        <MainBtn>Shorten Url</MainBtn>
      </FormContainer>
    </MainContainer>
  );
};

export default UrlToShort;
