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
      .post("/checkUrl", { url: shortenedUrl })
      .then((response: AxiosResponse<Response>) => {
        setIsLoading(false);
        if (response.data.success) {
          console.log(response.data.url);
          setUrl({ url: response.data.url! });
          return;
        }
        setUrl({ errorMsg: response.data.message! });
      });
  }
  return (
    <MainContainer>
      <FormContainer submitAction={handleSubmit}>
        <TextInput
          label="Enter shortened URL!"
          setStateAction={setShortenedUrl}
          state={shortenedUrl}
          disabled={isLoading}
        />
        {url === null || isLoading === true ? null : url.url ? (
          <Message shortenedUrl={url.url!} />
        ) : (
          <Message errorMsg={url.errorMsg!} />
        )}

        {isLoading ? <Loading /> : null}

        <MainBtn submitType={true}>Check URL</MainBtn>
      </FormContainer>
    </MainContainer>
  );
};

export default ShortToUrl;
