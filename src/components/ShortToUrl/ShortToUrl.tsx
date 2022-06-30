import React, { useState } from "react";
import FormContainer from "../FormContainer";
import MainBtn from "../MainBtn";
import MainContainer from "../MainContainer";
import TextInput from "../TextInput";

const ShortToUrl: React.FC = () => {
  const [url, setUrl] = useState<string>("");

  function handleSubmit(): void {}
  return (
    <MainContainer>
      <FormContainer submitAction={handleSubmit}>
        <TextInput
          label="Enter shortened URL below!"
          setStateAction={setUrl}
          state={url}
        />
        <MainBtn submitType={true}>Check URL</MainBtn>
      </FormContainer>
    </MainContainer>
  );
};

export default ShortToUrl;
