import { RequestHandler } from "express";

declare module 'express-serve-static-core' {
    interface Request extends RequestHandler {
      user?: string | JwtPayload;
    }
  }