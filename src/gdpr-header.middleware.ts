import { NextFunction, Request, RequestHandler, Response } from 'express';
import { DEFAULT_GDPR_HEADER_OPTIONS } from './constants';
import { gdprApplies } from './gdpr-applies';
import { GdprHeaderOptions } from './interfaces';

export const gdprHeaderMiddleware = (options: GdprHeaderOptions = {}): RequestHandler => {
  const config: GdprHeaderOptions = { ...DEFAULT_GDPR_HEADER_OPTIONS, ...options };
  return (req: Request, res: Response, next: NextFunction) => {
    if (config.headerName) {
      res.header(config.headerName, gdprApplies(req) ? config.headerTrueValue : config.headerFalseValue);
    }
    next();
  }
}
