import mongoose from "mongoose";

export async function connect(dbURI: string) {
  mongoose.connect(dbURI).then((connection) => {
    if (!connection) {
      return console.log("Connection failed");
    }
    return;
  });
}

const UrlSchema = new mongoose.Schema({
  shorted_url: {
    type: "string",
    required: true,
  },
  url: {
    type: "string",
    required: true,
  },
});

export const UrlModel = mongoose.model("Url", UrlSchema);

interface createShortenedUrlReturns {
  success: boolean;
  message: string;
  url: string | null;
}
export async function createShortenedUrl(
  url: string,
  shortenedUrl: string
): Promise<createShortenedUrlReturns> {
  console.log(shortenedUrl);
  var result: createShortenedUrlReturns;

  await UrlModel.create({ url: url, shorted_url: shortenedUrl })
    .then((doc) => {
      result = {
        success: true,
        message: "successfully created",
        url: shortenedUrl,
      };
    })
    .catch((err) => {
      result = { success: false, message: err.message, url: null };
    });

  return result!;
}
