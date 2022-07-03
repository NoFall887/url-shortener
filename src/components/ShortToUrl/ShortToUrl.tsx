import axios, { AxiosResponse } from "axios";
import React, { useState } from "react";
import FormContainer from "../FormContainer";
import MainBtn from "../MainBtn";
import MainContainer from "../MainContainer";
import TextInput from "../TextInput";

interface FormSubmitResult {
  errorMsg?: string;
  url?: string;
}

const ShortToUrl: React.FC = () => {
  const [url, setUrl] = useState<FormSubmitResult | null>(null);
  const [shortenedUrl, setShortenedUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    setIsLoading(true);
    e.preventDefault();
    interface Response {
      success: boolean;
      message: string;
      url: string | null;
    }
    axios
      .post("checkUrl", { url: shortenedUrl })
      .then((response: AxiosResponse<Response>) => {
        setIsLoading(false);
      })
      .catch();
  }
  return (
    <MainContainer>
      <FormContainer submitAction={handleSubmit}>
        <TextInput
          label="Enter shortened URL below!"
          setStateAction={setShortenedUrl}
          state={shortenedUrl}
          disabled={isLoading}
        />
        <MainBtn submitType={true}>Check URL</MainBtn>
      </FormContainer>
    </MainContainer>
  );
};

export default ShortToUrl;
