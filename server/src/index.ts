import express from "express";
import dotenv from "dotenv";
import { connect, createShortenedUrl } from "./database";
import cors from "cors";
import { nanoid } from "nanoid";
import { isValidUrl } from "./urlValidation";

dotenv.config();
const app: express.Application = express();

connect(process.env.DB_URI!.toString());
app.use(cors());
app.use(express.json());
app.use(isValidUrl);
declare global {
  namespace Express {
    interface Request {
      urlString: string;
    }
  }
}

app.post("/api/shortenUrl", async (req, res) => {
  interface createShortenedUrlReturns {
    success: boolean;
    message: string;
    url: string | null;
  }
  const url = req.urlString;

  const result: createShortenedUrlReturns = await createShortenedUrl(
    url,
    req.headers.host! + "/" + nanoid(10)
  );

  if (result.success) {
    return res.json(result);
  }
  return res.json(result);
});

app.get("/api/checkUrl", (req, res) => {});

app.listen(process.env.PORT || 5000, () => {
  console.log("listening on port " + (process.env.PORT || 5000));
});
