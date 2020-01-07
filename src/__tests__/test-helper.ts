import { HEADER } from "../constants";

export const mockRequestWithCountry = (country: string[] | string | undefined): any => ({
  headers: {
    [HEADER.CLOUDFRONT_VIEWER_COUNTRY]: country,
  },
});

export const mockRequestWithCountryAndRegion = (country: string[] | string | undefined, region: string[] | string | undefined): any => ({
  headers: {
    [HEADER.CLOUDFRONT_VIEWER_COUNTRY]: country,
    [HEADER.CLOUDFRONT_VIEWER_COUNTRY_REGION]: region,
  },
});

export const mockResponse = (): any => ({
  header: jest.fn(),
});

export const mockNext = () => jest.fn();
