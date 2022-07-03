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
  url_id: {
    type: "string",
    required: true,
  },
  url: {
    type: "string",
    required: true,
  },
});

export const UrlModel = mongoose.model("urls", UrlSchema);

// CREATE SHORTENED URL
export interface CreateReadReturns {
  success: boolean;
  message: string;
  url: string | null;
}
export async function createShortenedUrl(
  url: string,
  urlId: string
): Promise<CreateReadReturns> {
  console.log(urlId);
  var result: CreateReadReturns;

  await UrlModel.create({ url_id: urlId, url: url })
    .then((doc) => {
      result = {
        success: true,
        message: "successfully created",
        url: urlId,
      };
    })
    .catch((err) => {
      result = { success: false, message: err.message, url: null };
    });

  return result!;
}

// GET REAL URL
export async function getRealUrl(urlId: string): Promise<CreateReadReturns> {
  var result: CreateReadReturns;
  await UrlModel.findOne({ url_id: urlId })
    .exec()
    .then((doc) => {
      if (doc === null) {
        result = { success: false, message: "not found", url: null };
        return;
      }
      result = { success: true, message: "url found", url: doc.url };
    })
    .catch((err) => {
      result = { success: false, message: err.message, url: null };
    });
  return result!;
}
