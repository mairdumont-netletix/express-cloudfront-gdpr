import { Request } from "express";
import { HEADER } from "./constants";

const getSafeValue = (value: string | string[] | undefined): string => {
  const valueAsString: string | undefined = Array.isArray(value) ? value[0] : value;
  return (valueAsString && valueAsString.length > 0) ? valueAsString.toUpperCase() : '';
}

export const getCloudfrontViewerCountryFromHeader = (req: Request): string => getSafeValue(req.headers[HEADER.CLOUDFRONT_VIEWER_COUNTRY]);

export const getCloudfrontViewerCountryRegionFromheader = (req: Request): string => getSafeValue(req.headers[HEADER.CLOUDFRONT_VIEWER_COUNTRY_REGION]);
