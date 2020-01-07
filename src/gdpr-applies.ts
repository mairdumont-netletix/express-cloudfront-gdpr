import { Request } from "express";
import { GDPR_COUNTRIES } from "./constants";
import { getCloudfrontViewerCountryFromHeader } from "./utils";

export const gdprApplies = (req: Request): boolean => {
  const country = getCloudfrontViewerCountryFromHeader(req);
  return GDPR_COUNTRIES.indexOf(country) > -1;
}
