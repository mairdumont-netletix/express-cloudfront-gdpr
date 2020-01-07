import { Request } from "express";
import { getCloudfrontViewerCountryFromHeader, getCloudfrontViewerCountryRegionFromheader } from "./utils";

export const ccpaApplies = (req: Request): boolean => {
  const country = getCloudfrontViewerCountryFromHeader(req);
  const countryRegion = getCloudfrontViewerCountryRegionFromheader(req);
  return (country === 'US' && countryRegion === 'CA')
}
