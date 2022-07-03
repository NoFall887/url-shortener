import axios, { AxiosResponse } from "axios";
import React, { useState } from "react";
import FormContainer from "../FormContainer";
import Loading from "../Loading";
import MainBtn from "../MainBtn";
import MainContainer from "../MainContainer";
import Message from "../Message";
import TextInput from "../TextInput";

interface FormSubmitResult {
  errorMsg?: string;
  shortenedUrl?: string;
}

const UrlToShort = () => {
  const [url, setUrl] = useState<string>("");
  const [shortenedUrl, setShortenedUrl] = useState<FormSubmitResult | null>(
    null
  );
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
      .post("/createShortenedUrl", { url: url })
      .then((response: AxiosResponse<Response>) => {
        setIsLoading(false);
        if (response.data.success) {
          console.log(response.data.url);
          setShortenedUrl({ shortenedUrl: response.data.url! });
          return;
        }
        setShortenedUrl({ errorMsg: response.data.message! });
      });
  }

  return (
    <MainContainer>
      <FormContainer submitAction={handleSubmit}>
        <TextInput
          state={url}
          setStateAction={setUrl}
          label="Enter your URL below!"
          disabled={isLoading}
        />
        {shortenedUrl === null ||
        isLoading === true ? null : shortenedUrl.shortenedUrl ? (
          <Message shortenedUrl={shortenedUrl.shortenedUrl!} />
        ) : (
          <Message errorMsg={shortenedUrl.errorMsg!} />
        )}
        {isLoading ? <Loading /> : null}
        <MainBtn submitType={true}>Shorten URL</MainBtn>
      </FormContainer>
    </MainContainer>
  );
};

export default UrlToShort;
