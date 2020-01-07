import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ccpaApplies } from './ccpa-applies';
import { DEFAULT_CCPA_HEADER_OPTIONS } from './constants';
import { CcpaHeaderOptions } from './interfaces';

export const ccpaHeaderMiddleware = (options: CcpaHeaderOptions = {}): RequestHandler => {
  const config: CcpaHeaderOptions = { ...DEFAULT_CCPA_HEADER_OPTIONS, ...options };
  return (req: Request, res: Response, next: NextFunction) => {
    if (config.headerName) {
      res.header(config.headerName, ccpaApplies(req) ? config.headerTrueValue : config.headerFalseValue);
    }
    next();
  }
}
