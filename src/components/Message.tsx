import React from "react";

interface Props {
  errorMsg?: string;
  shortenedUrl?: string;
}

const Message: React.FC<Props> = ({ errorMsg, shortenedUrl }) => {
  return (
    <div className="text-center">
      {shortenedUrl ? (
        <>
          <p className="text-violet-700 font-medium text-lg">Your Url :</p>
          <a
            href={shortenedUrl}
            target="_blank"
            rel="noreferrer"
            className="text-blue-800 hover:text-blue-600 font-medium text-base"
          >
            {shortenedUrl}
          </a>
        </>
      ) : (
        <p className="text-violet-700 font-medium text-lg">{errorMsg}</p>
      )}
    </div>
  );
};

export default Message;
