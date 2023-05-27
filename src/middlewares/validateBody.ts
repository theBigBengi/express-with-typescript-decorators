import { NextFunction, Response, Request, RequestHandler } from "express";

export function validateBody(keys: string): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      return res.status(422).send(`Missing body `);
    }
    for (const key of keys) {
      if (!req.body[key]) {
        return res.status(422).send(`Missing ${key} `);
      }
    }

    next();
  };
}
