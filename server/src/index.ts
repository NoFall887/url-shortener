import express from "express";
import dotenv from "dotenv";
import {
  connect,
  CreateReadReturns,
  createShortenedUrl,
  getRealUrl,
} from "./database";
import cors from "cors";
import { nanoid } from "nanoid";
import { hasProtocol, isValidUrl } from "./urlValidation";

dotenv.config();
const app: express.Application = express();

connect(process.env.DB_URI!.toString());
app.use(cors());
app.use(express.json());
app.use(["/api/createShortenedUrl", "/api/checkUrl"], isValidUrl);
declare global {
  namespace Express {
    interface Request {
      urlString: string;
    }
  }
}

app.post("/api/createShortenedUrl", async (req, res) => {
  const url = req.urlString;

  var result: CreateReadReturns = await createShortenedUrl(url, nanoid(10));
  result.url = "http://" + req.headers.host + "/" + result.url;
  if (result.success) {
    return res.json(result);
  }
  return res.json(result);
});

app.get("/api/checkUrl", async (req, res) => {
  var url = req.urlString;

  var result: CreateReadReturns = await getRealUrl(url);
  if (result.success) {
    return res.json(result);
  }
  return res.json(result);
});

app.get("/:urlId", async (req, res) => {
  const shortenedUrl: string = req.params.urlId;
  const result: CreateReadReturns = await getRealUrl(shortenedUrl);
  if (result.success) {
    if (!hasProtocol(result.url)) {
      result.url = "https://" + result.url;
    }

    return res.redirect(result.url);
  }
  return res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("listening on port " + (process.env.PORT || 5000));
});
