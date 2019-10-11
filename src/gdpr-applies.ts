import { Request } from "express";
import { GDPR_COUNTRIES, HEADER } from "./constants";

export const gdprApplies = (req: Request): boolean => {
  const cloudfrontViewerCountry: string | string[] | undefined = req.headers[HEADER.CLOUDFRONT_VIEWER_COUNTRY];
  const cloudfrontViewerCountryAsString: string | undefined = Array.isArray(cloudfrontViewerCountry) ? cloudfrontViewerCountry[0] : cloudfrontViewerCountry;
  const countryCode = (cloudfrontViewerCountryAsString && cloudfrontViewerCountryAsString.length > 0) ? cloudfrontViewerCountryAsString.toUpperCase() : '';
  return GDPR_COUNTRIES.indexOf(countryCode) > -1;
}
