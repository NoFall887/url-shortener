import { NextFunction, Request, Response } from "express";

export const isValidUrl = (req: Request, res: Response, next: NextFunction) => {
  interface Url {
    url: string;
  }
  const { url }: Url = req.body;
  var urlPattern: RegExp = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // validate fragment locator

  if (urlPattern.test(url)) {
    req.urlString = url;
    next();
    return;
  }
  res.json({ success: false, message: "Invalid Url", url: null });
};
